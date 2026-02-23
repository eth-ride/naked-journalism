"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function FeedTabs() {
  const [activeTab, setActiveTab] = useState<"home" | "following">("home");

  return (
    <div className="sticky top-16 lg:top-20 z-40 bg-bg-surface/95 backdrop-blur-lg border-b-2 border-bg-elevated">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="flex gap-8 h-[56px]">
          <button
            onClick={() => setActiveTab("home")}
            className={cn(
              "relative px-2 font-semibold transition-colors capitalize",
              activeTab === "home"
                ? "text-brand-orange"
                : "text-text-secondary hover:text-brand-orange"
            )}
          >
            Home
            {activeTab === "home" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange rounded-t-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("following")}
            className={cn(
              "relative px-2 font-semibold transition-colors capitalize",
              activeTab === "following"
                ? "text-brand-orange"
                : "text-text-secondary hover:text-brand-orange"
            )}
          >
            Following
            {activeTab === "following" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-orange rounded-t-full" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
