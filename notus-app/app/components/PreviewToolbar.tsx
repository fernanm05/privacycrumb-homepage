"use client";
import { useState } from "react";
import { Monitor, Tablet, Smartphone, ExternalLink, Bookmark, Moon, Sparkles, ArrowLeft, Eye, Lock } from "lucide-react";

export default function PreviewToolbar() {
  const [activeDevice, setActiveDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white border border-neutral-200 rounded-2xl shadow-lg px-2 py-1.5">
        {/* Back button */}
        <button className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors px-3 py-2 rounded-xl hover:bg-neutral-50">
          <ArrowLeft size={14} />
          <span className="max-w-[80px] truncate">Nodus Agen...</span>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-200 mx-1" />

        {/* Preview / Code toggle */}
        <div className="flex items-center bg-neutral-100 rounded-xl p-0.5">
          <button className="flex items-center gap-1.5 text-sm font-medium text-neutral-800 bg-white rounded-lg px-3 py-1.5 shadow-sm">
            <Eye size={14} />
            Preview
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 px-3 py-1.5 rounded-lg hover:text-neutral-600 transition-colors">
            <Lock size={12} />
            Code
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-200 mx-1" />

        {/* Device size buttons */}
        <div className="flex items-center gap-0.5">
          {[
            { id: "desktop" as const, Icon: Monitor },
            { id: "tablet" as const, Icon: Tablet },
            { id: "mobile" as const, Icon: Smartphone },
          ].map(({ id, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveDevice(id)}
              className={`p-2 rounded-lg transition-colors ${activeDevice === id ? "text-neutral-800 bg-neutral-100" : "text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50"}`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-200 mx-1" />

        {/* Action icons */}
        <div className="flex items-center gap-0.5">
          <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 transition-colors">
            <ExternalLink size={16} />
          </button>
          <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 transition-colors">
            <Bookmark size={16} />
          </button>
          <button className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 transition-colors">
            <Moon size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-200 mx-1" />

        {/* All Access button */}
        <button className="flex items-center gap-1.5 bg-neutral-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-black transition-colors">
          <Sparkles size={14} />
          All Access
        </button>
      </div>
    </div>
  );
}
