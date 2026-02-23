import { Navigation } from "@/components/Navigation";
import { FeedTabs } from "@/components/feed/FeedTabs";
import { PostCard } from "@/components/feed/PostCard";
import { mockPosts } from "@/lib/mockData";

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-bg-dark">
      <Navigation />
      <FeedTabs />

      <div className="max-w-[700px] mx-auto pb-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
