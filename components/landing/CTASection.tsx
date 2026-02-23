"use client";

import { useState } from "react";
import { Button } from "../Button";
import { WaitlistModal } from "../modals/WaitlistModal";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTASection() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-bg-dark via-brand-orange/10 to-bg-dark py-24">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-brand-orange" />

          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Join Our Vision</h2>

          <p className="text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto mb-4">
            Be part of reshaping journalism in Africa. We're launching April 1st!
          </p>

          <p className="text-base text-text-muted max-w-2xl mx-auto mb-12">
            Get early access and exclusive updates as we build a platform where truth matters
            more than influence.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowWaitlist(true)}
            className="hover:scale-110 group"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>

          <p className="mt-6 text-sm text-text-muted">
            Get early access and exclusive updates
          </p>
        </div>
      </section>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </>
  );
}
