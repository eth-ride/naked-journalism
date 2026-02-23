import { Navigation } from "@/components/Navigation";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { PostCard } from "@/components/feed/PostCard";
import { mockUsers, mockPosts } from "@/lib/mockData";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }> | { username: string };
}) {
  const resolvedParams = await Promise.resolve(params);
  const user = mockUsers.find((u) => u.username === resolvedParams.username) || mockUsers[0];
  const userPosts = mockPosts.filter((p) => p.author.username === resolvedParams.username);

  return (
    <main className="min-h-screen bg-bg-dark">
      <Navigation />

      <div className="mx-auto">
        <ProfileHeader user={user} />
        <ProfileTabs />

        <div className="max-w-[700px] mx-auto border-x border-bg-elevated bg-bg-surface pb-6">
          {userPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
