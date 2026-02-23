"use client";

import { useState } from "react";
import { Calendar, Check, Link as LinkIcon, MapPin } from "lucide-react";
import { User } from "@/lib/mockData";
import { formatNumber } from "@/lib/utils";
import { Button } from "../Button";
import { TipModal } from "../modals/TipModal";

interface ProfileHeaderProps {
  user: User;
}

function TipCoinIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const [showTipModal, setShowTipModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <>
      <div className="mx-auto max-w-[700px] border-x border-bg-elevated bg-bg-surface">
        <div className="h-[170px] sm:h-[220px] border-b-2 border-bg-elevated bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12)_0_18%,transparent_19%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.10)_0_14%,transparent_15%),linear-gradient(135deg,#A04830,#C85A3F,#D97A5F)]" />

        <div className="px-4 pb-5 sm:px-6">
          <div className="-mt-16 mb-4 sm:-mt-20">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-white bg-brand-orange text-3xl font-bold text-white shadow-[0_8px_24px_rgba(26,26,26,0.12)] sm:h-36 sm:w-36 sm:text-4xl">
              {user.displayName
                .split(" ")
                .slice(0, 2)
                .map((part) => part[0])
                .join("")}
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2">
              <h1 className="font-serif text-3xl font-bold leading-tight text-text-primary">
                {user.displayName}
              </h1>
              {user.verified && <Check className="h-5 w-5 text-brand-orange" />}
            </div>
            <p className="text-text-secondary">@{user.username}</p>
          </div>

          {user.bio && <p className="mb-4 leading-relaxed text-text-primary">{user.bio}</p>}

          <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
            {user.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-orange hover:underline"
              >
                <LinkIcon className="h-4 w-4" />
                <span>{user.website.replace(/^https?:\/\//, "")}</span>
              </a>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-orange" />
              <span>Joined February 2026</span>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-5 text-sm">
            <div>
              <span className="font-bold text-text-primary">{formatNumber(user.stats.followers)}</span>{" "}
              <span className="text-text-secondary">Followers</span>
            </div>
            <div>
              <span className="font-bold text-text-primary">{formatNumber(user.stats.following)}</span>{" "}
              <span className="text-text-secondary">Following</span>
            </div>
            {user.stats.totalTipsReceived && (
              <div>
                <span className="font-bold text-text-primary">{user.stats.totalTipsReceived}</span>{" "}
                <span className="text-text-secondary">Tips Received</span>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant={isFollowing ? "primary" : "secondary"}
              size="sm"
              onClick={() => setIsFollowing((prev) => !prev)}
              className="flex-1"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowTipModal(true)}
              className="flex-1 gap-2 text-brand-orange"
            >
              <TipCoinIcon />
              Tip
            </Button>

            <Button variant="secondary" size="sm" className="flex-1">
              Message
            </Button>
          </div>
        </div>
      </div>

      {showTipModal && (
        <TipModal
          recipient={{ username: user.username, displayName: user.displayName }}
          onClose={() => setShowTipModal(false)}
        />
      )}
    </>
  );
}
