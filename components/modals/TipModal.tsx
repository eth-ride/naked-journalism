"use client";

import { useEffect } from "react";
import { X, CreditCard } from "lucide-react";

interface TipModalProps {
  recipient: {
    username: string;
    displayName: string;
  };
  onClose: () => void;
}

function TipCoinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 8.8c0-1.2-1.25-2.05-2.8-2.05s-2.8.85-2.8 2.05 1.25 2.05 2.8 2.05 2.8.85 2.8 2.05-1.25 2.05-2.8 2.05-2.8-.85-2.8-2.05" />
      <path d="M12 5.6v12.8" />
    </svg>
  );
}

function MetaMaskMark() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12,2.1 6.8,5.7 8.6,10.2 12,8.4 15.4,10.2 17.2,5.7" fill="#ff5c16" />
      <polygon points="8.6,10.2 6.8,5.7 5.5,9.9 8.5,12.1" fill="#c24e14" />
      <polygon points="15.4,10.2 17.2,5.7 18.5,9.9 15.5,12.1" fill="#d85a17" />
      <polygon points="8.5,12.1 10.2,15.7 12,14.7 13.8,15.7 15.5,12.1 12,13.1" fill="#763d16" />
      <polygon points="10.2,15.7 9,18.8 12,17.3 15,18.8 13.8,15.7 12,16.6" fill="#f7c7a6" />
      <polygon points="12,8.4 10.9,10.7 12,11.5 13.1,10.7" fill="#2f2f2f" />
    </svg>
  );
}

function MpesaMark() {
  return (
    <span className="relative inline-flex h-6 min-w-10 items-center justify-center rounded-md border border-[#00a651]/20 bg-white px-1.5">
      <span className="translate-x-[-1px] text-[7px] font-extrabold tracking-[0.03em] text-[#00a651]">
        M-PESA
      </span>
      <span className="absolute right-1 top-1 h-[2px] w-2 origin-right rotate-[-24deg] rounded bg-[#e60012]" />
    </span>
  );
}

export function TipModal({ recipient, onClose }: TipModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tip-modal-title"
    >
      <div
        className="w-full max-w-[560px] overflow-hidden rounded-xl border-2 border-bg-elevated border-t-4 border-t-brand-orange bg-bg-surface shadow-[0_20px_60px_rgba(26,26,26,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-bg-elevated px-4 py-4">
          <div>
            <div className="mb-1 flex items-center gap-2 text-brand-orange">
              <TipCoinIcon />
              <span className="text-xs font-bold uppercase tracking-[0.08em]">Support journalism</span>
            </div>
            <h2 id="tip-modal-title" className="font-serif text-2xl font-bold text-text-primary">
              Support {recipient.displayName}
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Choose a payment method to send a tip securely.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-bg-elevated text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary"
            aria-label="Close tip options"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-3 p-4">
          <button
            type="button"
            className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border-2 border-bg-elevated bg-bg-surface px-4 py-3 text-left transition-all hover:-translate-y-px hover:border-brand-orange/35 hover:bg-[#fcfaf6] max-sm:grid-cols-[44px_1fr]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bg-elevated bg-bg-dark text-brand-orange">
              <MetaMaskMark />
            </span>
            <span>
              <strong className="block text-sm font-semibold text-text-primary">Crypto Payment</strong>
              <span className="block text-xs text-text-secondary">
                Pay with wallet connection (MetaMask supported)
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary max-sm:col-span-2 max-sm:ml-[56px]">
              <span className="rounded-full border border-bg-elevated bg-bg-surface px-2 py-1">MetaMask</span>
            </span>
          </button>

          <button
            type="button"
            className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border-2 border-bg-elevated bg-bg-surface px-4 py-3 text-left transition-all hover:-translate-y-px hover:border-brand-orange/35 hover:bg-[#fcfaf6] max-sm:grid-cols-[44px_1fr]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bg-elevated bg-bg-dark text-brand-orange">
              <CreditCard className="h-5 w-5" />
            </span>
            <span>
              <strong className="block text-sm font-semibold text-text-primary">Global Bank Payments</strong>
              <span className="block text-xs text-text-secondary">
                International card checkout for Visa and Mastercard
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary max-sm:col-span-2 max-sm:ml-[56px]">
              <span className="rounded-full border border-bg-elevated bg-white px-2 py-1 text-[#1a1f71]">VISA</span>
              <span className="rounded-full border border-bg-elevated bg-white px-2 py-1">
                <span className="relative inline-block h-[14px] w-6 align-middle">
                  <span className="absolute left-[2px] top-0 h-[14px] w-[14px] rounded-full bg-[#eb001b]/90" />
                  <span className="absolute right-[2px] top-0 h-[14px] w-[14px] rounded-full bg-[#f79e1b]/90" />
                </span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="grid w-full grid-cols-[44px_1fr_auto] items-center gap-3 rounded-xl border-2 border-bg-elevated bg-bg-surface px-4 py-3 text-left transition-all hover:-translate-y-px hover:border-brand-orange/35 hover:bg-[#fcfaf6] max-sm:grid-cols-[44px_1fr]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-bg-elevated bg-bg-dark text-[#00a651]">
              <MpesaMark />
            </span>
            <span>
              <strong className="block text-sm font-semibold text-text-primary">M-Pesa</strong>
              <span className="block text-xs text-text-secondary">
                Send directly via mobile money in Kenya
              </span>
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-text-secondary max-sm:col-span-2 max-sm:ml-[56px]">
              <span className="rounded-full border border-[#00a651]/20 bg-[#f3fff8] px-2 py-1 text-[#00a651]">
                M-PESA
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
