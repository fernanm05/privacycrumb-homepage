"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Webhook, AlertTriangle, Code, Shield, Zap } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const webhookEvents = [
  { event: "consent.given", desc: "Fired when a visitor gives consent for the first time.", payload: "consentId, categories, timestamp, domain, visitorId, region" },
  { event: "consent.updated", desc: "Fired when a visitor changes their consent preferences.", payload: "consentId, oldCategories, newCategories, timestamp" },
  { event: "consent.withdrawn", desc: "Fired when a visitor withdraws all non-essential consent.", payload: "consentId, timestamp, visitorId" },
  { event: "scan.completed", desc: "Fired when an automated cookie scan finishes.", payload: "domain, cookiesFound, newCookies, scanType, duration" },
  { event: "scan.new_cookies", desc: "Fired when a scan detects cookies not in your declaration.", payload: "domain, newCookies[], suggestedCategories" },
];

const setupSteps = [
  { num: "1", title: "Navigate to Settings → Webhooks", content: "In your PrivacyCrumb dashboard, go to your domain settings and open the Webhooks tab." },
  { num: "2", title: "Add a webhook endpoint", content: "Enter your webhook URL (e.g., https://api.yoursite.com/webhooks/privacycrumb). PrivacyCrumb sends POST requests to this URL." },
  { num: "3", title: "Select events", content: "Choose which events trigger the webhook. Start with 'consent.given' and 'consent.updated' for most use cases." },
  { num: "4", title: "Set a signing secret", content: "PrivacyCrumb includes an HMAC-SHA256 signature in the X-PC-Signature header. Use your signing secret to verify webhook authenticity." },
  { num: "5", title: "Test the webhook", content: "Click 'Send Test' to send a sample payload to your endpoint. Verify your server responds with HTTP 200." },
];

const payloadExample = `{
  "event": "consent.given",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "data": {
    "consentId": "pc_abc123def456",
    "domain": "example.com",
    "visitorId": "v_789xyz",
    "region": "EU-DE",
    "categories": {
      "necessary": true,
      "functional": true,
      "analytics": true,
      "marketing": false
    },
    "bannerVersion": "v2.3",
    "userAgent": "Mozilla/5.0 ..."
  }
}`;

const verificationExample = `// Node.js webhook verification
const crypto = require('crypto');

app.post('/webhooks/privacycrumb', (req, res) => {
  const signature = req.headers['x-pc-signature'];
  const payload = JSON.stringify(req.body);
  const secret = process.env.PC_WEBHOOK_SECRET;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  if (signature !== expected) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the webhook
  const { event, data } = req.body;
  switch (event) {
    case 'consent.given':
      handleNewConsent(data);
      break;
    case 'consent.updated':
      handleConsentUpdate(data);
      break;
  }

  res.status(200).json({ received: true });
});`;

const bestPractices = [
  "Always verify the X-PC-Signature header before processing webhooks",
  "Respond with HTTP 200 within 5 seconds — process heavy work asynchronously",
  "PrivacyCrumb retries failed webhooks (non-2xx response) up to 3 times with exponential backoff",
  "Store the consentId for each webhook — use it to reconcile with consent logs",
  "Use the scan.new_cookies event to get alerts when third-party scripts add new cookies",
];

export default function WebhooksPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Developer Reference</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Webhooks & Callbacks</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Set up webhooks to receive real-time notifications when users update their consent preferences.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Events */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Available events</h2></FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Event</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Payload Fields</th></tr></thead>
                  <tbody>
                    {webhookEvents.map((e, i) => (
                      <tr key={e.event} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-mono text-coral whitespace-nowrap">{e.event}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{e.desc}</td>
                        <td className="px-4 py-3 text-neutral-400 text-[11px]">{e.payload}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setup</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {setupSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Payload Example */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Example payload</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-8">{payloadExample}</div>
            </FadeIn>

            {/* Verification */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Signature verification (Node.js)</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-8 max-h-[350px] overflow-y-auto">{verificationExample}</div>
            </FadeIn>

            {/* Best Practices */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Best practices</h2>
              <div className="space-y-2 mb-10">
                {bestPractices.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/spa-guide" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Single Page Application Guide</p></div>
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
