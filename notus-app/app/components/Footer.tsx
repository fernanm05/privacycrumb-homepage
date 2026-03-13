"use client";
import { SendHorizontal } from "lucide-react";

const product = ["Agent Builder", "Simulation", "Integrations", "Multi Agent", "Workflow API"];
const company = ["Sign In", "About", "Contact", "Pricing", "Careers", "Docs", "Changelog", "Glossary"];
const legal = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3 dark:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a2 2 0 012 2v6h4a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4H5a2 2 0 01-2-2V5a2 2 0 012-2h8zm0 2H5v8h6V7a2 2 0 012-2zm6 8h-4v6h6v-6h-2z"/></svg>
              Notus
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Manage and simulate agentic workflows</p>
            <button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start building</button>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 mb-4">Product</h4>
            {product.map((l) => <a key={l} href="#" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2.5 transition-colors">{l}</a>)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 mb-4">Company</h4>
            {company.map((l) => <a key={l} href="#" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2.5 transition-colors">{l}</a>)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 mb-4">Legal</h4>
            {legal.map((l) => <a key={l} href="#" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-2.5 transition-colors">{l}</a>)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 mb-4">Newsletter</h4>
            <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-800 px-4 py-2.5 mb-3">
              <input type="email" placeholder="Your email" className="text-sm flex-1 outline-none bg-transparent text-neutral-700 dark:text-neutral-200 placeholder:text-neutral-400" />
              <button className="text-neutral-500 hover:text-neutral-900 transition-colors"><SendHorizontal size={18} /></button>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">Get the latest product news and behind the scenes updates.</p>
          </div>
        </div>
        <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 flex items-center justify-between">
          <span className="text-xs text-neutral-400">&copy; 2024 Notus Aceternity Fight Club. All rights reserved.</span>
          <div className="flex gap-4 text-neutral-400">
            {/* Twitter/X */}
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
