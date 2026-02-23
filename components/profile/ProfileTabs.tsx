"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState<"posts" | "articles" | "media" | "funded">("posts");

  const tabs = [
    { id: "posts" as const, label: "Posts" },
    { id: "articles" as const, label: "Articles" },
    { id: "media" as const, label: "Media" },
    { id: "funded" as const, label: "Funded" },
  ];

  return (
    <div className="sticky top-16 lg:top-20 z-40">
      <div className="max-w-[700px] mx-auto px-4 bg-bg-surface/95 backdrop-blur-lg border-y border-x border-bg-elevated">
        <div className="flex gap-6 h-[56px] overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-2 font-semibold whitespace-nowrap transition-colors",
                activeTab === tab.id
                  ? "text-brand-orange"
                  : "text-text-secondary hover:text-brand-orange"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
