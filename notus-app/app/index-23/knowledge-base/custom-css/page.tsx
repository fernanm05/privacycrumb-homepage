"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Code, Paintbrush, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const cssProperties = [
  { selector: ".pc-banner", desc: "The main banner container", examples: "background, border-radius, box-shadow, padding, max-width" },
  { selector: ".pc-banner-title", desc: "The banner heading text", examples: "font-size, font-weight, color, margin" },
  { selector: ".pc-banner-text", desc: "The banner description text", examples: "font-size, color, line-height, max-width" },
  { selector: ".pc-btn-accept", desc: "The 'Accept All' button", examples: "background, color, border-radius, padding, font-weight" },
  { selector: ".pc-btn-reject", desc: "The 'Reject All' button", examples: "background, color, border, border-radius" },
  { selector: ".pc-btn-settings", desc: "The 'Manage Preferences' button", examples: "background, color, text-decoration, font-size" },
  { selector: ".pc-category-toggle", desc: "Individual category toggle switches", examples: "accent-color, width, height" },
  { selector: ".pc-overlay", desc: "The background overlay (for modals)", examples: "background, opacity, backdrop-filter" },
];

const cssExample = `/* Custom CSS Example — Dark theme with rounded corners */
.pc-banner {
  background: #1a1a2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px 32px;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.pc-banner-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.pc-banner-text {
  color: #a0a0b0;
  font-size: 14px;
  line-height: 1.6;
}

.pc-btn-accept {
  background: #e07a5f;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.pc-btn-accept:hover {
  background: #c96a50;
}

.pc-btn-reject {
  background: transparent;
  color: #a0a0b0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 10px 24px;
}`;

const tips = [
  "Use the dashboard's live preview to see changes in real-time before publishing",
  "The Custom CSS field supports full CSS — including media queries for responsive adjustments",
  "Use !important sparingly — PrivacyCrumb styles have low specificity by design",
  "Test your custom styles in both light and dark mode if your site supports themes",
  "Custom CSS is available on Pro and Enterprise plans",
  "Keep your custom CSS minimal — override only what you need to change",
];

export default function CustomCssPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500">Banner Customization</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">Pro</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Styling with Custom CSS</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Use the custom CSS editor to achieve pixel-perfect banner designs that match your brand.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">While the dashboard visual editor covers most customization needs, the Custom CSS field gives you full control over every pixel. Navigate to <strong className="text-neutral-900 dark:text-white">Banner Settings → Advanced → Custom CSS</strong> to get started.</p></FadeIn>

            {/* CSS Selectors */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Available CSS selectors</h2></FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Selector</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Element</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Common Properties</th></tr></thead>
                  <tbody>
                    {cssProperties.map((p, i) => (
                      <tr key={p.selector} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-mono text-coral">{p.selector}</td>
                        <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">{p.desc}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{p.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Code Example */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Example: Dark theme</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10 max-h-[400px] overflow-y-auto">{cssExample}</div>
            </FadeIn>

            {/* Tips */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2"><Paintbrush size={16} className="text-coral" /> Tips</h2>
              <div className="space-y-2 mb-10">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/banner-layout-options" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Banner Layout Options</p></div>
                </a>
                <a href="/index-23/knowledge-base/multi-language-banners" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Multi-Language Banners</p></div>
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
