"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Code, Globe } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const platforms = [
  {
    name: "Plain HTML",
    icon: Code,
    instructions: "Open your main HTML file (usually index.html) and paste the PrivacyCrumb script tag inside the <head> section, before any other JavaScript or analytics scripts.",
    code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Website</title>\n\n  <!-- PrivacyCrumb - Add BEFORE other scripts -->\n  <script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>\n\n  <!-- Other scripts go after -->\n</head>`,
  },
  {
    name: "WordPress",
    icon: Globe,
    instructions: "Option 1: Use the PrivacyCrumb WordPress plugin (recommended). Install it from your WordPress admin panel under Plugins → Add New → search 'PrivacyCrumb'. Option 2: Add the script manually via Appearance → Theme Editor → header.php, or use a header/footer injection plugin.",
    code: `// In your theme's functions.php:\nfunction add_privacycrumb() {\n  echo '<script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>';\n}\nadd_action('wp_head', 'add_privacycrumb', 1);`,
  },
  {
    name: "Shopify",
    icon: Globe,
    instructions: "Go to Online Store → Themes → Actions → Edit Code. Open the theme.liquid file and paste the script tag inside the <head> section, right after the opening <head> tag.",
    code: `<!-- In theme.liquid, inside <head> -->\n<script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>`,
  },
  {
    name: "Next.js / React",
    icon: Code,
    instructions: "Add the script to your root layout file (app/layout.tsx) or use the Next.js Script component for optimal loading. The script should load before any analytics or marketing tags.",
    code: `// app/layout.tsx\nimport Script from 'next/script';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <head>\n        <Script\n          src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"\n          strategy="beforeInteractive"\n        />\n      </head>\n      <body>{children}</body>\n    </html>\n  );\n}`,
  },
  {
    name: "Webflow",
    icon: Globe,
    instructions: "Go to Project Settings → Custom Code → Head Code. Paste the PrivacyCrumb script tag there. It will automatically be added to all pages.",
    code: `<!-- In Webflow Project Settings → Custom Code → Head Code -->\n<script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>`,
  },
  {
    name: "Wix",
    icon: Globe,
    instructions: "Go to Settings → Custom Code → Head. Click '+ Add Code' and paste the PrivacyCrumb script. Set it to load on 'All pages' and 'Head' placement.",
    code: `<!-- Paste in Wix Custom Code → Head -->\n<script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>`,
  },
];

const tips = [
  "Always place the PrivacyCrumb script BEFORE any analytics, marketing, or third-party scripts",
  "Use the exact script URL from your dashboard — it contains your unique site key",
  "The script loads asynchronously and won't block page rendering",
  "After adding the script, verify installation from your PrivacyCrumb dashboard",
  "If using a caching plugin (e.g., WP Super Cache), clear your cache after adding the script",
];

export default function AddingScriptTagPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Getting Started</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 3 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Adding the Script Tag</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Learn how to add the PrivacyCrumb script to your website — with platform-specific guides for HTML, WordPress, Shopify, Next.js, Webflow, and Wix.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Where to find your script */}
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Where to find your script tag</h2>
                <ol className="space-y-2 list-decimal list-inside text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  <li>Log in to your <a href="https://app.privacycrumb.com" className="text-coral hover:underline">PrivacyCrumb dashboard</a></li>
                  <li>Navigate to <strong className="text-neutral-900 dark:text-white">Settings → Installation</strong></li>
                  <li>Copy the script tag shown — it includes your unique site key</li>
                </ol>
              </div>
            </FadeIn>

            {/* Platform Guides */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Platform-specific guides</h2></FadeIn>
            <div className="space-y-4">
              {platforms.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.04}>
                  <details className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <summary className="px-5 py-4 text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <p.icon size={16} className="text-coral" />
                        <span>{p.name}</span>
                      </div>
                      <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{p.instructions}</p>
                      <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-4 font-mono text-xs text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre">{p.code}</div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>

            {/* Tips */}
            <FadeIn>
              <div className="mt-10 mb-10">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Important tips</h2>
                <ul className="space-y-2">
                  {tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Navigation */}
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/quick-start-guide" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Quick Start Guide</p></div>
                </a>
                <a href="/index-23/knowledge-base/dashboard-overview" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Dashboard Overview</p></div>
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
