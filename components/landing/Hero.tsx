"use client";

import { useState } from "react";
import { Button } from "../Button";
import { WaitlistModal } from "../modals/WaitlistModal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-b from-bg-dark via-bg-dark to-bg-surface py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 text-center">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-6 relative animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-orange-light rounded-xl rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl">
              *
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-text-secondary bg-clip-text text-transparent">
            Naked Journalism
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Strengthening press freedom by redesigning its financial foundations
          </p>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowWaitlist(true)}
            className="mb-4 group"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>

          {/* Launch Date */}
          <p className="text-accent-warning font-medium">
            Launching April 1st, 2026
          </p>

          {/* Hero Image */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="aspect-video bg-bg-elevated rounded-xl overflow-hidden border border-bg-elevated shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                {/* Placeholder for hero image/video */}
                <p className="text-center px-4">
                  Truth matters more than influence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </>
  );
}
