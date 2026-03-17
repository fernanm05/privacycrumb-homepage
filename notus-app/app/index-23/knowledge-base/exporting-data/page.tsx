"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Download, FileText, Code, Settings, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const exportFormats = [
  {
    title: "CSV Export",
    desc: "Comma-separated values file. Best for opening in Excel, Google Sheets, or any spreadsheet application. Each row is one consent record.",
    fields: "Consent ID, Timestamp, Visitor ID, Action, Necessary, Functional, Analytics, Marketing, Region, Banner Version, User Agent",
    useCase: "Sharing with legal teams, compliance audits, spreadsheet analysis",
  },
  {
    title: "JSON Export",
    desc: "JavaScript Object Notation file. Best for importing into databases, data pipelines, or custom analytics tools. Preserves nested data structure.",
    fields: "Full consent objects including nested categories, metadata, and configuration snapshots",
    useCase: "API integrations, database imports, automated compliance workflows",
  },
  {
    title: "PDF Report (Enterprise)",
    desc: "A formatted compliance report with summary statistics, consent trends, and individual consent records. Ready for regulatory submissions.",
    fields: "Executive summary, consent rate charts, full consent log, banner configuration history",
    useCase: "DPA audits, board presentations, regulatory filings",
  },
];

const exportSteps = [
  { num: "1", title: "Go to Analytics → Export", content: "Navigate to the Analytics section and click the 'Export Data' button." },
  { num: "2", title: "Select date range", content: "Choose the start and end dates for the export. You can export up to 12 months of data at a time." },
  { num: "3", title: "Apply filters (optional)", content: "Filter by region, consent action type (given/updated/withdrawn), or specific cookie categories." },
  { num: "4", title: "Choose format", content: "Select CSV, JSON, or PDF (Enterprise). The download starts immediately for small exports; larger exports are emailed when ready." },
  { num: "5", title: "Download or receive via email", content: "Small exports (<50MB) download immediately. Larger exports are processed in the background and emailed to your account address." },
];

const apiExample = `// Export via API (Pro & Enterprise)
const response = await fetch('https://api.privacycrumb.com/v1/consent/export', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    domain: 'example.com',
    format: 'json',   // 'csv' or 'json'
    dateFrom: '2024-01-01',
    dateTo: '2024-03-31',
    filters: {
      region: 'EU',        // optional
      action: 'given'      // optional: 'given', 'updated', 'withdrawn'
    }
  })
});

const data = await response.json();
// { exportId: "exp_123", status: "processing", downloadUrl: null }

// Poll for completion:
// GET /v1/consent/export/exp_123
// { status: "completed", downloadUrl: "https://..." }`;

const tips = [
  "Schedule automatic weekly or monthly exports to keep offsite backups of consent records",
  "Use the API export for automated compliance workflows and data pipelines",
  "CSV exports are limited to 100,000 records per file — use date filters for larger datasets",
  "Exported data does not include PII — visitor IDs are hashed anonymized identifiers",
  "Store exports securely — consent records may be subject to data protection requirements themselves",
];

export default function ExportingDataPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">Analytics & Reporting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 3 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Exporting Consent Data</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Export consent records as CSV or JSON for external auditing and record-keeping.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Export Formats */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Export formats</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {exportFormats.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2"><Download size={16} className="text-indigo-500" /><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{f.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">{f.desc}</p>
                    <p className="text-[11px] text-neutral-400 mb-1"><strong className="text-neutral-600 dark:text-neutral-300">Fields:</strong> {f.fields}</p>
                    <p className="text-[11px] text-neutral-400"><strong className="text-neutral-600 dark:text-neutral-300">Best for:</strong> {f.useCase}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">How to export</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {exportSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* API Example */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">API export (Pro & Enterprise)</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-8 max-h-[350px] overflow-y-auto">{apiExample}</div>
            </FadeIn>

            {/* Tips */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Tips</h2>
              <div className="space-y-2 mb-10">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/consent-log" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Consent Log & Audit Trail</p></div>
                </a>
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
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
