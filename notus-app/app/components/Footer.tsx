"use client";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Newsletter */}
        <div className="pb-10 mb-10 border-b border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-3">
              <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="h-6" />
              <img src="/PrivacyCrumbText.svg" alt="PrivacyCrumb" className="h-4 dark:brightness-0 dark:invert" />
            </div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1" style={{ marginLeft: 35 }}>Stay up to date</h4>
            <p className="text-xs text-neutral-400" style={{ marginLeft: 35 }}>Get the latest privacy news and compliance updates delivered to your inbox.</p>
          </div>
          <div>
            <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 px-4 py-2.5 w-full md:w-auto md:min-w-[320px]">
              <input type="email" placeholder="Your email address" className="text-sm flex-1 outline-none bg-transparent text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400" />
              <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs px-4 py-1.5 rounded-lg font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors ml-2">Subscribe</button>
            </div>
            <label className="flex items-start gap-2 mt-2.5 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-coral shrink-0" />
              <span className="text-[11px] text-neutral-400 leading-relaxed">I agree to receive newsletters from PrivacyCrumb and accept the <a href="/index-23/privacy-policy" className="underline hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">privacy policy</a>.</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          {/* Column 1: PrivacyCrumb + Use Cases */}
          <div>
            <div className="font-bold text-base mb-4 dark:text-white">
              PrivacyCrumb
            </div>
            {[
              { label: "Pricing", href: "/index-23/pricing" },
              { label: "Features", href: "/index-23/features" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}

            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Use Cases</h4>
            {[
              { label: "Founder", href: "/index-23/founder" },
              { label: "Developer", href: "/index-23/developer" },
              { label: "Marketer", href: "/index-23/marketer" },
              { label: "Agency", href: "/index-23/agency" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}
          </div>

          {/* Column 2: Solutions + Compare */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Solutions</h4>
            {[
              { label: "GDPR EU & UK", href: "/index-23/gdpr" },
              { label: "CCPA California", href: "/index-23/ccpa" },
              { label: "CPRA California", href: "/index-23/cpra" },
              { label: "IAB TCF v2.2", href: "/index-23/iab-tcf" },
              { label: "Google Consent Mode", href: "/index-23/google-consent-mode" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}
            <a href="/index-23/all-regulations" className="inline-block text-sm text-neutral-700 dark:text-neutral-300 font-medium mt-1 hover:text-neutral-900 dark:hover:text-white transition-colors">All regulations →</a>

            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Compare</h4>
            {[
              { label: "Cookiebot", href: "/index-23/cookiebot" },
              { label: "Iubenda", href: "/index-23/lubenda" },
              { label: "Complianz", href: "/index-23/complianz" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}
            <a href="/index-23/all-comparisons" className="inline-block text-sm text-neutral-700 dark:text-neutral-300 font-medium mt-1 hover:text-neutral-900 dark:hover:text-white transition-colors">All comparisons →</a>
          </div>

          {/* Column 3: Resources + Support */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Resources</h4>
            {[
              { label: "Knowledge Base", href: "/index-23/knowledge-base" },
              { label: "Infographics", href: "/index-23/infographics" },
              { label: "Newsletter", href: "/index-23/newsletter" },
              { label: "About", href: "/index-23/about" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}

            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Support</h4>
            {[
              { label: "Help Center", href: "/index-23/help-center" },
              { label: "Contact Us", href: "/index-23/contact" },
              { label: "FAQ", href: "/index-23/faq" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}
          </div>

          {/* Column 4: Free Tools + Legal + Partners */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4">Free Tools ✨</h4>
            {[
              { label: "Privacy Policy Generator", href: "https://app.privacycrumb.com/free/privacy-policy-generator" },
              { label: "Cookie Policy Generator", href: "https://app.privacycrumb.com/free/cookie-policy-generator" },
              { label: "Cookie Checker", href: "https://app.privacycrumb.com/free-scanner" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}

            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-6 mb-3">Legal</h4>
            {[
              { label: "Privacy Policy", href: "/index-23/privacy-policy" },
              { label: "Cookie Policy", href: "/index-23/cookies-policy" },
              { label: "Terms and Conditions", href: "/index-23/terms-conditions" },
              { label: "Data Processing Agreement", href: "/index-23/dpa" },
              { label: "Accessibility Statement", href: "/index-23/accessibility-statement" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}

            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mt-6 mb-3 flex items-center gap-2">
              Partners
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-coral px-2 py-0.5 rounded-full">Join us!</span>
            </h4>
            {[
              { label: "Agency Partner", href: "/index-23/agency-partner" },
              { label: "Affiliate Partner", href: "/index-23/affiliate-partner" },
              { label: "Strategic Partner", href: "/index-23/strategic-partner" },
              { label: "Partner Directory", href: "/index-23/partner-directory" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block">&copy; 2025 PrivacyCrumb. All rights reserved.</span>
            <span className="text-[11px] text-neutral-400 mt-1 block">Cookie consent management platform — Making privacy compliance simple for websites worldwide.</span>
          </div>
          <div className="flex gap-4 text-neutral-400">
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
