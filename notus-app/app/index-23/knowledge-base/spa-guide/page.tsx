"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Code, Zap } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const frameworks = [
  {
    name: "React / Next.js",
    code: `// app/layout.tsx (Next.js App Router)
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://app.privacycrumb.com/policy.js?key=YOUR_KEY"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

// Using the API in a component:
// useEffect(() => {
//   if (window.PrivacyCrumb?.hasConsent('analytics')) {
//     initAnalytics();
//   }
//   window.PrivacyCrumb?.onConsentChange((c) => {
//     if (c.analytics) initAnalytics();
//   });
// }, []);`,
  },
  {
    name: "Vue.js / Nuxt",
    code: `// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://app.privacycrumb.com/policy.js?key=YOUR_KEY',
          tagPosition: 'head',
        }
      ]
    }
  }
});

// In a component:
// onMounted(() => {
//   window.PrivacyCrumb?.onConsentChange((c) => {
//     if (c.analytics) initAnalytics();
//   });
// });`,
  },
  {
    name: "Angular",
    code: `// index.html — add before closing </head>
<script src="https://app.privacycrumb.com/policy.js?key=YOUR_KEY"></script>

// In a service:
@Injectable({ providedIn: 'root' })
export class ConsentService {
  checkConsent(category: string): boolean {
    return (window as any).PrivacyCrumb?.hasConsent(category);
  }

  onConsentChange(callback: (consent: any) => void) {
    (window as any).PrivacyCrumb?.onConsentChange(callback);
  }
}`,
  },
  {
    name: "Gatsby",
    code: `// gatsby-ssr.js
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="privacycrumb"
      src="https://app.privacycrumb.com/policy.js?key=YOUR_KEY"
    />,
  ]);
};

// In a component:
// useEffect(() => {
//   window.PrivacyCrumb?.onConsentChange((c) => {
//     if (c.analytics) initAnalytics();
//   });
// }, []);`,
  },
];

const spaConsiderations = [
  { title: "Route Changes", desc: "PrivacyCrumb automatically persists consent across route changes. No need to re-initialize on navigation — consent state is stored in cookies and re-read on page load." },
  { title: "Script Loading Order", desc: "In SPAs, use 'beforeInteractive' (Next.js) or head injection to ensure the script loads before any component renders. This prevents a flash of unconsented cookies." },
  { title: "Dynamic Script Loading", desc: "For third-party scripts loaded dynamically (e.g., via useEffect), always check consent before loading. Use PrivacyCrumb.hasConsent() or listen for consent changes." },
  { title: "SSR / Hydration", desc: "PrivacyCrumb works with SSR/SSG. The script is loaded once and persists across hydration. Consent state is available immediately after hydration." },
];

export default function SpaGuidePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Developer Reference</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Single Page Application Guide</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Configure PrivacyCrumb for React, Vue, Angular, Next.js, Nuxt, and Gatsby single page applications.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Framework Guides */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Framework integration guides</h2></FadeIn>
            <div className="space-y-4 mb-10">
              {frameworks.map((f, i) => (
                <FadeIn key={f.name} delay={i * 0.04}>
                  <details className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5"><Code size={16} className="text-coral" /><span className="text-sm font-semibold text-neutral-900 dark:text-white">{f.name}</span></div>
                      <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre">{f.code}</div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>

            {/* SPA Considerations */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">SPA-specific considerations</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {spaConsiderations.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{s.title}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/google-consent-mode-v2" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Google Consent Mode v2</p></div>
                </a>
                <a href="/index-23/knowledge-base/webhooks" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Webhooks & Callbacks</p></div>
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
