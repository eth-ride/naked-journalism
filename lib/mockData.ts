export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  banner?: string;
  verified: boolean;
  bio?: string;
  location?: string;
  website?: string;
  stats: {
    followers: number;
    following: number;
    totalTipsReceived?: string;
  };
}

export interface Post {
  id: string;
  author: {
    username: string;
    displayName: string;
    avatar: string;
    verified: boolean;
  };
  type: "article" | "image" | "video" | "text";
  content: {
    text?: string;
    media?: string;
    article?: {
      title: string;
      excerpt: string;
      featuredImage: string;
      readTime: string;
    };
    video?: {
      url: string;
      duration: string;
    };
  };
  timestamp: string;
  engagement: {
    likes: number;
    comments: number;
    reposts: number;
    tips: number;
  };
}

export const mockUsers: User[] = [
  {
    id: "user_1",
    username: "investigator_ken",
    displayName: "Kenneth Ochieng",
    avatar: "/avatars/ken.jpg",
    banner: "/banners/ken.jpg",
    verified: true,
    bio: "Investigative journalist covering government accountability, corruption, and public finance across East Africa. Based in Nairobi. Truth over influence.",
    location: "Nairobi, Kenya",
    website: "https://kenochieng.com",
    stats: {
      followers: 12500,
      following: 892,
      totalTipsReceived: "$2,345",
    },
  },
  {
    id: "user_2",
    username: "photojournalist_asha",
    displayName: "Asha Mohammed",
    avatar: "/avatars/asha.jpg",
    verified: true,
    bio: "Documenting climate change impact on African communities through visual storytelling.",
    location: "Kampala, Uganda",
    stats: {
      followers: 8900,
      following: 234,
    },
  },
  {
    id: "user_3",
    username: "field_reporter_juma",
    displayName: "Juma Mwangi",
    avatar: "/avatars/juma.jpg",
    verified: true,
    bio: "On-ground reporter covering grassroots movements and citizen activism across Kenya.",
    location: "Mombasa, Kenya",
    stats: {
      followers: 15200,
      following: 678,
    },
  },
  {
    id: "user_4",
    username: "analyst_wanjiku",
    displayName: "Wanjiku Kamau",
    avatar: "/avatars/wanjiku.jpg",
    verified: true,
    bio: "Political analyst and data journalist. Making complex issues accessible.",
    location: "Nairobi, Kenya",
    stats: {
      followers: 6700,
      following: 345,
    },
  },
];

export const mockPosts: Post[] = [
  {
    id: "post_1",
    author: {
      username: "investigator_ken",
      displayName: "Kenneth Ochieng",
      avatar: "/avatars/ken.jpg",
      verified: true,
    },
    type: "article",
    content: {
      text: "Breaking: Six-month investigation reveals systematic budget mismanagement in County X. Follow the money trail from public coffers to private accounts.",
      article: {
        title: "Uncovering Budget Mismanagement in County X",
        excerpt:
          "A deep dive into financial records reveals how Ksh 450 million in public funds were diverted through shell companies, leaving essential services unfunded while officials prospered.",
        featuredImage: "/articles/budget-investigation.jpg",
        readTime: "12 min read",
      },
    },
    timestamp: "2026-02-22T10:30:00Z",
    engagement: {
      likes: 245,
      comments: 67,
      reposts: 89,
      tips: 34,
    },
  },
  {
    id: "post_2",
    author: {
      username: "photojournalist_asha",
      displayName: "Asha Mohammed",
      avatar: "/avatars/asha.jpg",
      verified: true,
    },
    type: "image",
    content: {
      text: "Documenting climate change impact on Lake Victoria communities. Rising water levels have displaced thousands, yet their stories remain untold.",
      media: "/images/lake-victoria-fishermen.jpg",
    },
    timestamp: "2026-02-22T14:15:00Z",
    engagement: {
      likes: 189,
      comments: 23,
      reposts: 45,
      tips: 12,
    },
  },
  {
    id: "post_3",
    author: {
      username: "field_reporter_juma",
      displayName: "Juma Mwangi",
      avatar: "/avatars/juma.jpg",
      verified: true,
    },
    type: "video",
    content: {
      text: "Live from the ground: Citizens demand accountability outside Parliament. Peaceful protest entering day 3.",
      video: {
        url: "/videos/protest-coverage.mp4",
        duration: "2:34",
      },
    },
    timestamp: "2026-02-23T08:45:00Z",
    engagement: {
      likes: 567,
      comments: 134,
      reposts: 234,
      tips: 89,
    },
  },
  {
    id: "post_4",
    author: {
      username: "analyst_wanjiku",
      displayName: "Wanjiku Kamau",
      avatar: "/avatars/wanjiku.jpg",
      verified: true,
    },
    type: "text",
    content: {
      text: "Analysis: The proposed tax bill will disproportionately affect small businesses. Here's what the data shows:\n\n1. Micro-enterprises (under 10 employees) will see a 23% increase in operational costs.\n2. This could force 15,000+ businesses to close within 6 months.\n3. Projected job losses: 45,000-60,000 across the region.\n\nThe government claims this will increase revenue, but historical data from similar policies suggests otherwise. Thread below.",
    },
    timestamp: "2026-02-21T16:20:00Z",
    engagement: {
      likes: 78,
      comments: 45,
      reposts: 23,
      tips: 5,
    },
  },
];
