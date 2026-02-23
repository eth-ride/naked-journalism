"use client";

import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TipModal } from "@/components/modals/TipModal";
import { Newspaper } from "lucide-react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [showTipModal, setShowTipModal] = useState(false);

  return (
    <main className="min-h-screen bg-bg-dark">
      <Navigation />

      <div className="mx-auto max-w-[900px] px-4 pb-12 pt-5">
        <Link href="/feed" className="mb-4 inline-flex items-center gap-2 font-bold text-brand-orange hover:underline">
          ← Back to Feed
        </Link>

        <article className="overflow-hidden rounded-xl border-2 border-bg-elevated border-l-4 border-l-brand-orange bg-bg-surface shadow-[0_10px_30px_rgba(26,26,26,0.05)]">
          <div className="flex h-56 sm:h-80 items-center justify-center border-b-2 border-bg-elevated bg-gradient-to-br from-brand-orange-dark to-brand-orange text-white">
            <Newspaper className="h-24 w-24 opacity-50" />
          </div>

          <div className="p-5 sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-brand-orange">
              Investigative Report
            </p>
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight text-text-primary sm:text-5xl">
              Uncovering Budget Mismanagement in County X
            </h1>
            <p className="mb-5 text-base leading-relaxed text-text-secondary">
              A six-month review of county procurement files, payment vouchers, and contractor records reveals a coordinated pattern of inflated tenders, duplicate invoices, and dormant shell entities receiving public funds.
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-bg-elevated pb-4 text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Kenneth Ochieng</span>
              <span>•</span>
              <span>@investigator_ken</span>
              <span>•</span>
              <span>Published Feb 23, 2026</span>
              <span>•</span>
              <span className="font-semibold text-brand-orange">12 min read</span>
            </div>

            <div className="space-y-4 leading-relaxed text-text-primary">
              <p>
                County X allocated emergency development funds to roadworks, school rehabilitation, and water access projects over the last fiscal year. According to internal expenditure schedules reviewed by Naked Journalism, at least Ksh 450 million was paid to firms with limited or no visible operational history.
              </p>
              <p>
                Several payment batches were approved within 48 hours of invoice submission, bypassing standard verification timelines. In multiple cases, the same procurement officer signed both requisition and completion forms, a separation-of-duties breach flagged by public finance guidelines.
              </p>
              <blockquote className="rounded-lg border-l-4 border-brand-orange bg-bg-dark px-4 py-3 font-serif text-xl leading-relaxed">
                “The records were designed to look complete at first glance, but the supporting documents collapse once you trace company ownership and delivery evidence.”
              </blockquote>
              <h2 className="pt-2 font-serif text-2xl font-bold">How the money moved</h2>
              <p>
                The reporting team matched tender award notices against registry extracts and bank transfer summaries supplied by two independent sources. Three recurring patterns emerged: contract splitting below approval thresholds, repeated payments to related companies, and completion certificates issued for projects with no physical work on site.
              </p>
              <div className="rounded-lg border border-bg-elevated bg-bg-dark p-4">
                <p className="mb-1 text-sm font-semibold text-brand-orange-dark">Document trail reviewed</p>
                <p className="text-sm text-text-secondary">
                  42 payment vouchers, 17 procurement committee minutes, 11 tender award notices, site visit photos from 6 locations, and registry records for 9 contractors.
                </p>
              </div>
              <h2 className="pt-2 font-serif text-2xl font-bold">Impact on residents</h2>
              <p>
                At two schools listed as fully renovated, classrooms still had broken windows and unfinished roofing. A borehole project marked as complete and commissioned remained fenced off with no pump installed. Residents in affected wards said they were repeatedly informed the projects had already been funded.
              </p>
              <p>
                County officials contacted for comment acknowledged documentation inconsistencies but said an internal review is ongoing. No timeline for public disclosure was provided.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border-2 border-bg-elevated bg-gradient-to-b from-white to-[#fbf8f2] p-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-xl font-bold">Support this reporting</h3>
                <p className="text-sm text-text-secondary">
                  Tips go directly to the journalist and fund document access, travel, and follow-up investigations.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowTipModal(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-4 py-3 font-bold text-white transition-colors hover:bg-brand-orange-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M14.8 8.8c0-1.2-1.25-2.05-2.8-2.05s-2.8.85-2.8 2.05 1.25 2.05 2.8 2.05 2.8.85 2.8 2.05-1.25 2.05-2.8 2.05-2.8-.85-2.8-2.05" />
                  <path d="M12 5.6v12.8" />
                </svg>
                Tip Kenneth
              </button>
            </div>
          </div>
        </article>
      </div>

      {showTipModal && (
        <TipModal
          recipient={{ username: "investigator_ken", displayName: "Kenneth Ochieng" }}
          onClose={() => setShowTipModal(false)}
        />
      )}
    </main>
  );
}
