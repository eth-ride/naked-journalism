"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { Button } from "./Button";
import { WaitlistModal } from "./modals/WaitlistModal";

export function Navigation() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-lg border-b-[3px] border-brand-orange shadow-[0_2px_10px_rgba(200,90,63,0.1)]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="10" y="30" width="80" height="55" rx="8" fill="#C85A3F" />
                <circle cx="50" cy="57" r="18" fill="#E8E0D0" />
                <circle cx="50" cy="57" r="12" fill="#C85A3F" />
                <circle cx="50" cy="57" r="6" fill="#E8E0D0" />
                <rect x="30" y="20" width="40" height="12" rx="6" fill="#C85A3F" />
                <circle cx="75" cy="40" r="4" fill="#E8E0D0" />
              </svg>
              <span className="text-base sm:text-lg font-black tracking-[0.12em] text-brand-orange font-serif">
                NAKED JOURNALISM
              </span>
            </Link>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setShowWaitlist(true)}
                className="uppercase tracking-wide text-xs"
              >
                Join Waitlist
              </Button>
              <Link href="/feed">
                <div className="w-9 h-9 rounded-full bg-brand-orange border-2 border-brand-orange-dark flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-bg-elevated">
              <div className="flex flex-col gap-3">
                <Link
                  href="/feed"
                  className="px-4 py-2 text-text-secondary hover:text-text-primary transition-colors font-medium"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Feed
                </Link>
                <div className="px-4">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setShowWaitlist(true);
                      setShowMobileMenu(false);
                    }}
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16 lg:h-20" />

      {/* Waitlist Modal */}
      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </>
  );
}
