"use client";
import { LayoutGrid, Cookie, Shield, FileText, Globe, BarChart3, Bell, HelpCircle, Search, TrendingUp, Clock, ShieldCheck, Activity, Timer, History } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { v: "2,847", l: "Cookies detected", Icon: Cookie, bg: "bg-orange-50", ic: "text-coral" },
  { v: "94.2%", l: "Consent rate", t: "6% ↑", tc: "text-green-500", Icon: TrendingUp, bg: "bg-green-50", ic: "text-green-500" },
  { v: "1.8s", l: "Avg. scan time", t: "18% ↓", tc: "text-coral", Icon: Clock, bg: "bg-yellow-50", ic: "text-amber-500" },
  { v: "GDPR", l: "Top regulation", Icon: ShieldCheck, bg: "bg-purple-50", ic: "text-purple-500" },
];
const domains = [
  { name: "privacycrumb.com", type: "GDPR", typeIcon: "🇪🇺", mic: "text-blue-600", status: "Compliant", dot: "bg-green-500", cookies: "142", time: "2 min ago" },
  { name: "store.example.io", type: "CCPA", typeIcon: "🇺🇸", mic: "text-red-500", status: "Review", dot: "bg-amber-500", cookies: "89", time: "15 min ago" },
  { name: "blog.startup.co", type: "LGPD", typeIcon: "🇧🇷", mic: "text-green-500", status: "Compliant", dot: "bg-green-500", cookies: "56", time: "1 hr ago" },
];
const bars = [[18,12],[14,16],[20,10],[16,18],[22,14],[12,20],[24,16],[18,14],[20,22],[14,12],[16,18],[22,20],[18,24],[20,16]];
const sidebarItems = [
  { Icon: LayoutGrid, label: "Dashboard" },
  { Icon: Cookie, label: "Cookie Scanner" },
  { Icon: Shield, label: "Consent Logs" },
  { Icon: ShieldCheck, label: "Regulations" },
  { Icon: Globe, label: "Domains" },
  { Icon: BarChart3, label: "Reports" },
  { Icon: Bell, label: "Alerts" },
];

export default function Dashboard() {
  return (
    <FadeIn className="max-w-5xl mx-auto px-6 pb-20 -mt-4 relative z-10">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
        <div className="flex min-h-[520px]">
          <div className="w-[190px] border-r border-neutral-100 dark:border-neutral-800 p-4 flex-shrink-0 hidden md:block">
            <div className="flex items-center gap-2 font-semibold text-sm mb-6 pb-4 border-b border-neutral-100 dark:border-neutral-800 dark:text-white">
              <img src="/Privacy-new-logo.png" alt="PrivacyCrumb" className="w-5 h-5" />
              PrivacyCrumb
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-neutral-400"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8"/></svg>
            </div>
            {sidebarItems.map((item, i) => (
              <div key={item.label} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] cursor-pointer mb-0.5 transition-colors ${i === 0 ? "bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium" : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"}`}>
                <item.Icon size={15} /> {item.label}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-neutral-400 cursor-pointer hover:text-neutral-600">
                <HelpCircle size={15} /> Help and first steps
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 dark:border-neutral-800">
              <span className="font-semibold text-sm dark:text-white">Dashboard</span>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-[13px] text-neutral-400 w-[260px]">
                <Search size={14} />
                Search for anything... <span className="ml-auto text-neutral-300">⌘K</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-600 dark:to-neutral-500" />
              </div>
            </div>
            {/* Stats cards with colored icon backgrounds */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
              {stats.map((s) => (
                <div key={s.l} className="p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-6 h-6 rounded-md ${s.bg} flex items-center justify-center`}>
                      <s.Icon size={13} className={s.ic} />
                    </div>
                  </div>
                  <div className="text-xl font-bold flex items-center gap-1.5 dark:text-white">
                    {s.v}{s.t && <span className={`text-xs font-medium ${s.tc}`}>{s.t}</span>}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            {/* Workflow monitor */}
            <div className="px-5 pb-3">
              <div className="font-semibold text-sm mb-3 dark:text-white">Cookie monitor</div>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 w-6"></th>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 dark:border-neutral-800">Domain</th>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 dark:border-neutral-800">
                      <span className="flex items-center gap-1"><Shield size={11} /> Regulation</span>
                    </th>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 dark:border-neutral-800"><span className="flex items-center gap-1"><Activity size={11} /> Status</span></th>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 dark:border-neutral-800"><span className="flex items-center gap-1"><Cookie size={11} /> Cookies</span></th>
                    <th className="text-left p-2 text-neutral-400 font-medium text-[12px] border-b border-neutral-100 dark:border-neutral-800"><span className="flex items-center gap-1"><History size={11} /> Last scan</span></th>
                  </tr>
                </thead>
                <tbody>
                  {domains.map((a) => (
                    <tr key={a.name} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                      <td className="p-2.5 border-b border-neutral-50 dark:border-neutral-800"><div className="w-3.5 h-3.5 rounded border border-neutral-300 dark:border-neutral-600" /></td>
                      <td className="p-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800 font-medium dark:text-neutral-200">{a.name}</td>
                      <td className="p-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800 text-xs dark:text-neutral-300"><span>{a.typeIcon}</span> {a.type}</span>
                      </td>
                      <td className="p-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${a.dot} mr-1.5`} /><span className="dark:text-neutral-200">{a.status}</span>
                      </td>
                      <td className="p-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400">{a.cookies}</td>
                      <td className="p-2.5 text-[13px] border-b border-neutral-50 dark:border-neutral-800 text-neutral-400">{a.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-3 px-5 pb-5">
              <div className="border border-neutral-100 dark:border-neutral-800 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-sm dark:text-white">Consent by type</span>
                  <span className="text-xs text-neutral-400 px-2.5 py-1 border border-neutral-100 dark:border-neutral-700 rounded-md cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800">Past 7 days ▾</span>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <svg width="110" height="110" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#FECACA" strokeWidth="16"/>
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#F26C4F" strokeWidth="16" strokeDasharray="200 302" strokeDashoffset="-75" strokeLinecap="round"/>
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#E5E7EB" strokeWidth="16" strokeDasharray="50 452" strokeDashoffset="-280" strokeLinecap="round"/>
                    <text x="60" y="56" textAnchor="middle" fontSize="22" fontWeight="700" fill="currentColor" className="text-neutral-900 dark:text-white">87%</text>
                    <text x="60" y="72" textAnchor="middle" fontSize="11" fill="#9CA3AF">Consent</text>
                  </svg>
                  <div className="flex flex-col gap-2 text-xs text-neutral-500">
                    {[{c:"#F26C4F",l:"Accepted"},{c:"#FECACA",l:"Partial"},{c:"#E5E7EB",l:"Rejected"}].map(i => (
                      <div key={i.l} className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{background:i.c}} />{i.l}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border border-neutral-100 dark:border-neutral-800 rounded-xl p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-sm dark:text-white">Cookie breakdown</span>
                  <span className="text-xs text-neutral-400 px-2.5 py-1 border border-neutral-100 dark:border-neutral-700 rounded-md cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800">Past 7 days ▾</span>
                </div>
                <div className="relative">
                  {/* Y-axis labels */}
                  <div className="absolute -left-1 top-0 h-[100px] flex flex-col justify-between text-[9px] text-neutral-300">
                    {["30","25","20","15","10","5"].map(v => <span key={v}>{v}</span>)}
                  </div>
                  <div className="flex items-end gap-1.5 h-[100px] ml-5">
                    {bars.map((d, i) => (
                      <div key={i} className="flex gap-0.5 flex-1 items-end h-full">
                        <div className="w-full rounded-t-sm bg-coral" style={{height: d[0]*3.5}} />
                        <div className="w-full rounded-t-sm bg-red-200" style={{height: d[1]*3.5}} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
