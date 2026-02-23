"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share2,
  MoreHorizontal,
  Check,
  Play,
  Newspaper,
  Image as ImageIcon,
} from "lucide-react";
import { Post } from "@/lib/mockData";
import { formatNumber, formatTimestamp, cn } from "@/lib/utils";
import { TipModal } from "../modals/TipModal";

interface PostCardProps {
  post: Post;
}

function TipCoinIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function articleSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showTipModal, setShowTipModal] = useState(false);
  const [likes, setLikes] = useState(post.engagement.likes);

  const toggleLike = () => {
    setIsLiked((prevLiked) => {
      setLikes((prevLikes) => (prevLiked ? prevLikes - 1 : prevLikes + 1));
      return !prevLiked;
    });
  };

  return (
    <>
      <article className="border-b border-bg-elevated bg-bg-surface px-4 py-6 transition-colors hover:bg-[#fbf8f2] sm:px-6">
        <div className="mb-4 flex items-start gap-3">
          <Link href={`/profile/${post.author.username}`} className="shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-orange-dark bg-brand-orange text-sm font-bold text-white">
              {post.author.displayName
                .split(" ")
                .slice(0, 2)
                .map((part) => part[0])
                .join("")}
            </div>
          </Link>

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <Link href={`/profile/${post.author.username}`} className="font-bold text-text-primary hover:underline">
                {post.author.displayName}
              </Link>
              {post.author.verified && <Check className="h-4 w-4 text-brand-orange" />}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>@{post.author.username}</span>
              <span>•</span>
              <span>{formatTimestamp(post.timestamp)}</span>
            </div>
          </div>

          <button className="rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          {post.content.text && (
            <p className="whitespace-pre-wrap leading-relaxed text-text-primary">{post.content.text}</p>
          )}

          {post.type === "article" && post.content.article && (
            <Link
              href={`/articles/${articleSlug(post.content.article.title)}`}
              className="mt-4 block rounded-lg text-inherit focus-visible:outline-2 focus-visible:outline-brand-orange/40 focus-visible:outline-offset-4"
            >
              <div className="overflow-hidden rounded-lg border-2 border-bg-elevated border-l-4 border-l-brand-orange bg-bg-dark transition-all hover:border-l-brand-orange-dark hover:shadow-[0_4px_20px_rgba(200,90,63,0.15)]">
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-brand-orange-dark to-brand-orange text-white">
                  <Newspaper className="h-16 w-16 opacity-50" />
                </div>
                <div className="bg-bg-surface p-5">
                  <h3 className="mb-3 font-serif text-2xl font-bold leading-tight text-text-primary">
                    {post.content.article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {post.content.article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <span>Investigative Report</span>
                    <span>•</span>
                    <span className="font-semibold text-brand-orange">{post.content.article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {post.type === "image" && (
            <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border-2 border-bg-elevated bg-gradient-to-br from-brand-orange-dark to-brand-orange-light">
              <ImageIcon className="h-16 w-16 text-white/60" />
            </div>
          )}

          {post.type === "video" && post.content.video && (
            <div className="relative mt-4 flex aspect-video items-center justify-center rounded-lg border-2 border-bg-elevated bg-gradient-to-br from-[#1A1A1A] to-[#6B6B6B]">
              <button className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-orange text-white transition-transform hover:scale-105 hover:bg-brand-orange-dark">
                <Play className="ml-1 h-8 w-8" fill="currentColor" />
              </button>
              <div className="absolute bottom-4 right-4 rounded bg-black/80 px-3 py-1 text-sm font-semibold text-white">
                {post.content.video.duration}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-around gap-1 border-t border-bg-elevated pt-4">
          <button
            onClick={toggleLike}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary",
              isLiked && "text-brand-orange"
            )}
          >
            <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
            <span className="font-bold">{formatNumber(likes)}</span>
          </button>

          <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary">
            <MessageCircle className="h-5 w-5" />
            <span className="font-bold">{formatNumber(post.engagement.comments)}</span>
          </button>

          <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary">
            <Repeat2 className="h-5 w-5" />
            <span className="font-bold">{formatNumber(post.engagement.reposts)}</span>
          </button>

          <button
            onClick={() => setShowTipModal(true)}
            className="group flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-dark hover:text-brand-orange"
          >
            <TipCoinIcon className="h-5 w-5" />
            <span className="font-semibold">Tip</span>
          </button>

          <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-dark hover:text-text-primary">
            <Share2 className="h-5 w-5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </article>

      {showTipModal && <TipModal recipient={post.author} onClose={() => setShowTipModal(false)} />}
    </>
  );
}
