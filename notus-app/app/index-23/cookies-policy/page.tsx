"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const sections = [
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.",
      "Cookies can be 'persistent' (they remain on your device until they expire or you delete them) or 'session' cookies (they are deleted when you close your browser). They can also be 'first-party' cookies (set by the website you're visiting) or 'third-party' cookies (set by a different domain).",
    ],
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    content: [
      "PrivacyCrumb uses cookies and similar technologies to ensure our website functions properly, understand how visitors interact with our platform, and improve your overall experience. We use cookies in accordance with applicable privacy laws, including the GDPR, ePrivacy Directive, and CCPA.",
      "We categorize the cookies we use into the following groups: Strictly Necessary, Functional, Analytics, and Marketing cookies. Each type serves a specific purpose as described below.",
    ],
  },
  {
    id: "strictly-necessary",
    title: "Strictly Necessary Cookies",
    content: [
      "These cookies are essential for the website to function and cannot be switched off in our systems. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.",
      "You can set your browser to block or alert you about these cookies, but some parts of the site will not work without them. These cookies do not store any personally identifiable information.",
    ],
    cookies: [
      { name: "pc_session", purpose: "Maintains your login session", duration: "Session", type: "First-party" },
      { name: "pc_csrf", purpose: "Security token to prevent cross-site request forgery", duration: "Session", type: "First-party" },
      { name: "pc_consent", purpose: "Stores your cookie consent preferences", duration: "1 year", type: "First-party" },
    ],
  },
  {
    id: "functional",
    title: "Functional Cookies",
    content: [
      "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third-party providers whose services we have added to our pages.",
      "If you do not allow these cookies, some or all of these services may not function properly.",
    ],
    cookies: [
      { name: "pc_lang", purpose: "Remembers your preferred language", duration: "1 year", type: "First-party" },
      { name: "pc_theme", purpose: "Stores your preferred theme (light/dark)", duration: "1 year", type: "First-party" },
      { name: "pc_timezone", purpose: "Detects your timezone for accurate reporting", duration: "Session", type: "First-party" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics Cookies",
    content: [
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.",
      "All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.",
    ],
    cookies: [
      { name: "_ga", purpose: "Google Analytics — distinguishes unique users", duration: "2 years", type: "Third-party" },
      { name: "_ga_*", purpose: "Google Analytics 4 — maintains session state", duration: "2 years", type: "Third-party" },
      { name: "_gid", purpose: "Google Analytics — distinguishes users", duration: "24 hours", type: "Third-party" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Cookies",
    content: [
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites.",
      "They do not directly store personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
    ],
    cookies: [
      { name: "_fbp", purpose: "Facebook Pixel — tracks visits across websites", duration: "3 months", type: "Third-party" },
      { name: "IDE", purpose: "Google DoubleClick — used for ad targeting", duration: "1 year", type: "Third-party" },
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookie Preferences",
    content: [
      "You can manage your cookie preferences at any time by clicking the cookie settings link in the footer of our website. You can also control cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.",
      "Please note that disabling certain cookies may affect the functionality of our website and the services we are able to offer you.",
      "Here are links to manage cookies in popular browsers:",
    ],
    links: [
      { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647" },
      { label: "Mozilla Firefox", href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
      { label: "Safari", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
      { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    ],
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. When we make changes, we will update the 'Last updated' date at the top of this page.",
      "We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions about our use of cookies or this Cookie Policy, please contact us at:",
      "Email: privacy@privacycrumb.com",
      "We will endeavour to respond to your request within 72 hours.",
    ],
  },
];

export default function CookiesPolicyPage() {
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
                Cookie{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Policy</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                Information about the cookies we use and how you can manage your preferences.
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
                          <p key={pi} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* Cookie Table */}
                      {s.cookies && (
                        <div className="mt-5 overflow-x-auto">
                          <table className="w-full text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                            <thead>
                              <tr className="bg-neutral-50 dark:bg-neutral-900">
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Cookie</th>
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Purpose</th>
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Duration</th>
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Type</th>
                              </tr>
                            </thead>
                            <tbody>
                              {s.cookies.map((c) => (
                                <tr key={c.name} className="border-b border-neutral-100 dark:border-neutral-800/50 last:border-0">
                                  <td className="px-4 py-2.5 font-mono text-xs text-coral whitespace-nowrap">{c.name}</td>
                                  <td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">{c.purpose}</td>
                                  <td className="px-4 py-2.5 text-neutral-500 dark:text-neutral-500 whitespace-nowrap">{c.duration}</td>
                                  <td className="px-4 py-2.5 text-neutral-500 dark:text-neutral-500 whitespace-nowrap">{c.type}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Browser Links */}
                      {s.links && (
                        <ul className="mt-4 space-y-1.5">
                          {s.links.map((l) => (
                            <li key={l.label}>
                              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-coral hover:text-coral/80 underline transition-colors">
                                {l.label} →
                              </a>
                            </li>
                          ))}
                        </ul>
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
