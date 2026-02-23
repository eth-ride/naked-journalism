"use client";

import Link from "next/link";
import { useState } from "react";
import { WaitlistModal } from "@/components/modals/WaitlistModal";

function CameraLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="30" width="80" height="55" rx="8" fill="#C85A3F" />
      <circle cx="50" cy="57" r="18" fill="#E8E0D0" />
      <circle cx="50" cy="57" r="12" fill="#C85A3F" />
      <circle cx="50" cy="57" r="6" fill="#E8E0D0" />
      <rect x="30" y="20" width="40" height="12" rx="6" fill="#C85A3F" />
      <circle cx="75" cy="40" r="4" fill="#E8E0D0" />
    </svg>
  );
}

const featureCards = [
  {
    number: "1",
    title: "Read Freely",
    body: "Browse investigations, photo essays, and field reports from verified journalists. No paywalls, no barriers—journalism as it should be.",
  },
  {
    number: "2",
    title: "Support Directly",
    body: "Found a story that matters? Tip the journalist using M-Pesa, cryptocurrency, or bank transfer. Every contribution goes straight to the reporter.",
  },
  {
    number: "3",
    title: "Build Trust",
    body: "Follow journalists whose work you value. Their independence is guaranteed—no advertisers, no editorial boards, just truth-telling.",
  },
];

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-bg-dark text-text-primary">
        <section className="relative flex min-h-screen flex-col bg-bg-dark">
          <div className="absolute right-0 top-0 z-20 p-4 sm:p-8">
            <Link
              href="/feed"
              className="inline-flex items-center rounded bg-[#C85A3F] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_12px_rgba(200,90,63,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#A04830] hover:shadow-[0_6px_16px_rgba(200,90,63,0.4)]"
            >
              Launch Demo
            </Link>
          </div>

          <div className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col items-center justify-center px-6 py-20 text-center">
            <div className="mb-12">
              <div className="mb-2 flex items-center justify-center gap-3">
                <span className="font-serif text-5xl font-bold tracking-[0.18em] text-brand-orange sm:text-6xl">
                  NAKED
                </span>
                <CameraLogo className="h-12 w-12 sm:h-16 sm:w-16" />
              </div>
              <div className="mb-4 font-serif text-3xl tracking-[0.18em] text-brand-orange sm:text-4xl">
                JOURNALISM
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-secondary sm:text-xs">
                Independent · Citizen-Funded · Press Freedom
              </div>
            </div>

            <div className="mb-12 h-[3px] w-full max-w-[1200px] bg-brand-orange" />

            <h1 className="mb-8 max-w-[900px] font-serif text-4xl font-black leading-tight text-text-primary sm:text-6xl">
              The Truth Doesn&apos;t Need a <span className="text-brand-orange">Sponsor</span>
            </h1>

            <p className="mb-10 max-w-[750px] text-lg leading-relaxed text-text-secondary sm:text-xl">
              Strengthening press freedom by redesigning its financial foundations.
              <br className="hidden sm:block" /> Direct support for independent journalists across Africa.
            </p>

            <button
              type="button"
              onClick={() => setShowWaitlist(true)}
              className="rounded bg-[#C85A3F] px-10 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(200,90,63,0.3)] transition-all hover:-translate-y-1 hover:bg-[#A04830] hover:shadow-[0_12px_32px_rgba(200,90,63,0.4)]"
            >
              Join the Waitlist
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-20 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-4xl font-bold text-brand-orange md:text-5xl">Why We Exist</h2>
            <p className="text-base text-text-muted">Rebuilding journalism from the ground up</p>
          </div>

          {/* Problem Statement */}
          <div className="mb-16 bg-bg-surface border-l-4 border-brand-orange p-8 md:p-10">
            <div className="mx-auto max-w-[900px]">
              <h3 className="mb-6 font-serif text-2xl font-bold text-text-primary md:text-3xl">The Broken Model</h3>
              <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                African journalism stands at a crossroads. For decades, newsrooms have operated under a model where <span className="font-semibold text-brand-orange">truth is sacrificed for advertising revenue</span> and editorial interference from powerful interests.
              </p>
              <div className="grid gap-6 md:grid-cols-3 my-8">
                <div className="text-center p-4 bg-bg-dark rounded-lg">
                  <div className="text-3xl font-bold text-brand-orange mb-2">Low Pay</div>
                  <div className="text-sm text-text-muted">Poverty wages drive talent away</div>
                </div>
                <div className="text-center p-4 bg-bg-dark rounded-lg">
                  <div className="text-3xl font-bold text-brand-orange mb-2">Brain Drain</div>
                  <div className="text-sm text-text-muted">Best journalists leave profession</div>
                </div>
                <div className="text-center p-4 bg-bg-dark rounded-lg">
                  <div className="text-3xl font-bold text-brand-orange mb-2">Interference</div>
                  <div className="text-sm text-text-muted">Editorial control by owners</div>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-text-secondary">
                When wealthy owners and advertisers control the purse strings, journalists cannot speak freely. This financial model has failed the very people it depends on.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="mx-auto max-w-[900px]">
            <div className="mb-8 border-t-4 border-brand-orange pt-8">
              <h3 className="mb-6 font-serif text-2xl font-bold text-brand-orange md:text-3xl">Our Solution</h3>
              <p className="mb-6 text-xl leading-relaxed text-text-primary font-medium">
                Naked Journalism reimagines this relationship: <span className="text-brand-orange">no paywalls, no subscriptions, no gatekeepers</span>.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary mb-8">
                Just honest reporting supported directly by readers who value truth. Through voluntary tipping via M-Pesa, crypto, or bank transfer, every contribution goes directly to the journalist creating sustainable income without compromising independence.
              </p>

              <div className="bg-brand-orange/10 border-2 border-brand-orange/30 rounded-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">💡</div>
                  <div>
                    <p className="text-lg font-semibold text-text-primary mb-2">The Result</p>
                    <p className="text-base leading-relaxed text-text-secondary">
                      Readers become patrons of the journalism they believe in. Journalists earn sustainable income while maintaining complete editorial independence. Truth matters more than influence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-16 max-w-[1100px] px-6 sm:px-8">
          <h2 className="mb-10 text-center font-serif text-4xl font-bold text-brand-orange">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.number}
                className="border-2 border-bg-elevated border-t-4 border-t-brand-orange bg-bg-surface p-8 transition-all hover:-translate-y-2 hover:border-brand-orange hover:shadow-[0_12px_30px_rgba(200,90,63,0.15)]"
              >
                <div className="mb-4 font-serif text-5xl font-bold leading-none text-brand-orange/30">{card.number}</div>
                <h3 className="mb-4 font-serif text-2xl font-bold text-text-primary">{card.title}</h3>
                <p className="leading-7 text-text-secondary">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#C85A3F] px-6 py-16 text-center sm:px-8">
          <div className="mx-auto max-w-[800px]">
            <blockquote className="mb-6 font-serif text-3xl italic leading-relaxed text-white sm:text-[2rem]">
              &quot;Freedom of the press is not just a constitutional right—it&apos;s the foundation of democracy and accountability.&quot;
            </blockquote>
            <p className="text-lg leading-8 text-white/90">
              Africa&apos;s media landscape is ready for change. With rising mobile connectivity and a young, engaged population, the continent is ready for journalism that serves the people, not powerful interests. Naked Journalism puts truth back at the center.
            </p>
          </div>
        </section>

        <section className="mx-auto my-16 max-w-[800px] border-4 border-brand-orange bg-bg-surface px-6 py-16 text-center sm:px-8">
          <h2 className="mb-3 font-serif text-4xl font-bold text-text-primary">Launch Edition</h2>
          <p className="mb-8 text-lg text-text-secondary">
            Be among the first readers when we go live. Join the waitlist for early access, exclusive updates, and the chance to fund truth in Africa.
          </p>
          <div className="mb-8 font-serif text-3xl font-bold tracking-[0.1em] text-brand-orange">
            APRIL 1ST, 2026
          </div>
          <button
            type="button"
            onClick={() => setShowWaitlist(true)}
            className="rounded bg-[#C85A3F] px-10 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(200,90,63,0.3)] transition-all hover:-translate-y-1 hover:bg-[#A04830] hover:shadow-[0_12px_32px_rgba(200,90,63,0.4)]"
          >
            Join the Waitlist
          </button>
        </section>

        <footer className="bg-[#1A1A1A] px-6 py-12 text-center text-white sm:px-8">
          <div className="mb-2 font-serif text-2xl font-bold tracking-[0.12em] text-brand-orange">
            NAKED JOURNALISM
          </div>
          <div className="mb-8 text-xs uppercase tracking-[0.16em] text-white/70">
            Independent · Citizen-Funded · Press Freedom
          </div>
          <div className="mb-6 text-sm leading-7 text-white/60">
            Strengthening press freedom by redesigning its financial foundations
            <br />
            <a href="https://nakedjournalism.xyz" className="text-brand-orange hover:text-brand-orange-light transition-colors">
              nakedjournalism.xyz
            </a>
          </div>
          <div className="mb-8 flex flex-wrap justify-center gap-6">
            {["Twitter", "LinkedIn", "Instagram", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-orange transition-colors hover:text-brand-orange-light"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mx-auto max-w-[900px] border-t border-white/10 pt-6 text-xs text-white/40">
            © 2026 Naked Journalism. All rights reserved.
          </div>
        </footer>
      </main>

      {showWaitlist && <WaitlistModal onClose={() => setShowWaitlist(false)} />}
    </>
  );
}
