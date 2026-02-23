import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-bg-elevated">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-brand-orange rounded-lg rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  *
                </div>
              </div>
              <span className="text-base font-bold">Naked Journalism</span>
            </div>
            <p className="text-sm text-text-muted">
              Strengthening press freedom by redesigning its financial foundations.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>Fred Gitonga</p>
              <p>Allan Robinson</p>
              <a
                href="mailto:hello@nakedjournalism.com"
                className="hover:text-accent-info transition-colors"
              >
                hello@nakedjournalism.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/nakedjournalism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-info transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com/company/nakedjournalism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-info transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/nakedjournalism"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-info transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-bg-elevated text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Naked Journalism. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
