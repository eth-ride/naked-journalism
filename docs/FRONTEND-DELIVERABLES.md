# Naked Journalism - Frontend Deliverables

## Project Overview

A Farcaster-inspired journalism platform enabling direct connections between readers and journalists. Content is **free to access**, with optional tipping to support creators. This is a **frontend-only demo** showcasing the core user experience.

## Design Inspiration

- **Farcaster** (https://farcaster.xyz/) - Social feed architecture and UX patterns
- **Dark Mode UI** - Modern, accessible interface
- **Mobile-First** - Optimized for mobile and desktop

## Branding Assets

- **Logo**: `/public/logo/WhatsApp Image 2026-02-22 at 3.03.57 PM.jpeg`
- **Color Scheme**: Dark theme with orange accent (as seen in presentation)

---

## Core Pages (3 Pages)

### 1. Landing Page
**Purpose**: Introduce the platform and convert visitors

**Sections**:
- Hero section with logo and tagline: "Strengthening press freedom by redesigning its financial foundations"
- **Primary CTA: "Join the Waitlist" button** (opens waitlist modal)
- Problem statement (Mkubwa Anasema > The Truth, etc.)
- How it works (4-step process with visuals)
- Why Africa, Why Now
- Secondary call-to-action: "Join the Waitlist" (repeated)
- Footer with contact info (Fred Gitonga & Allan Robinson)

**Waitlist Button Placement**:
- Hero section (primary position)
- Navigation bar (sticky)
- Bottom of page (before footer)

**Design Notes**:
- Bold typography
- Orange accent color (#FF5722 or similar)
- Dark background
- Smooth scrolling sections
- Responsive design

---

### 2. Homepage (Feed)
**Purpose**: Main content discovery feed

**Layout**:
```
┌─────────────────────────────────────────┐
│  [Logo]          Naked Journalism   [👤]│
├─────────────────────────────────────────┤
│  [home]  [following]                    │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │ [Avatar] @username · 3h      [⋮]  │  │
│  │                                   │  │
│  │ Article Title / Post Content      │  │
│  │ Lorem ipsum dolor sit amet...     │  │
│  │                                   │  │
│  │ [Article Preview Card] OR         │  │
│  │ [Image] OR [Video Player]         │  │
│  │                                   │  │
│  │ ❤️ 13  💬 3  🔁 5  💰 Tip  ↗️ Share│  │
│  └───────────────────────────────────┘  │
│                                         │
│  [More posts...]                        │
└─────────────────────────────────────────┘
```

**Features**:

**Post Types** (Show examples of all 3):
1. **Text/Article Post**
   - Journalist profile pic + verified badge
   - Article headline/preview
   - Truncated text with "Read more" link
   - Article card with featured image

2. **Image Post**
   - Full-width image display
   - Caption text
   - Photo credit attribution

3. **Video Post**
   - Embedded video player
   - Play/pause controls
   - Video duration indicator
   - Caption/description

**Post Interaction Buttons** (Below each post):
- ❤️ **Like** - Counter showing number of likes
- 💬 **Comment** - Counter showing number of comments
- 🔁 **Repost** - Counter showing number of reposts
- 💰 **Tip** - Opens payment modal (see below)
- ↗️ **Share** - Share button with copy link functionality

**Tip Payment Modal**:
```
┌─────────────────────────────┐
│  Tip @username              │
├─────────────────────────────┤
│  [Amount Input] USD         │
│                             │
│  Payment Method:            │
│  ○ Crypto (USDC, ETH)       │
│  ○ M-Pesa                   │
│  ○ Bank Transfer            │
│                             │
│  [Cancel]  [Send Tip]       │
└─────────────────────────────┘
```

**Top Navigation**:
- Logo (left)
- "Naked Journalism" wordmark
- **"Join Waitlist" button** (orange accent, sticky)
- Profile icon (right)
- Search icon

**Tabs**:
- Home (active by default)
- Following (filtered feed)

**Sample Posts to Display**:
1. Article about investigative journalism
2. Image post with photojournalism
3. Video post with reporter in the field

---

### 3. Profile Page
**Purpose**: Journalist/user profile and content portfolio

**Layout**:
```
┌─────────────────────────────────────────┐
│  [← Back]    Naked Journalism      [⋮]  │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │  [Profile Banner Image]         │    │
│  │                                 │    │
│  │  [Avatar] ✓ Verified            │    │
│  │                                 │    │
│  │  Name Surname                   │    │
│  │  @username                      │    │
│  │                                 │    │
│  │  Bio: Investigative journalist  │    │
│  │  covering civic accountability  │    │
│  │                                 │    │
│  │  📍 Location | 🔗 website.com   │    │
│  │                                 │    │
│  │  Followers: 1.2k | Following: 456│   │
│  │                                 │    │
│  │  [Follow] [Tip] [Message]       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [Posts] [Articles] [Media] [Funded]    │
├─────────────────────────────────────────┤
│                                         │
│  [User's posts feed...]                 │
│                                         │
└─────────────────────────────────────────┘
```

**Features**:
- Profile banner image
- Avatar with verification badge (✓)
- User bio and metadata
- Stats: followers, following, total tips received
- Action buttons: Follow, Tip, Message
- Tabs for content filtering:
  - Posts (all content)
  - Articles (written pieces)
  - Media (photos/videos)
  - Funded (crowdfunded investigations)
- User's post feed with same interaction buttons

**Profile Tip Button**:
- Same payment modal as post tips
- Supports general creator support (not tied to specific post)

---

## Component Specifications

### Post Card Component
**Required Elements**:
- Avatar (circular, 48x48px)
- Username with @ prefix
- Verification badge (if applicable)
- Timestamp (relative: "3h", "2d", etc.)
- More options menu (⋮)
- Post content (text, image, video, or article card)
- Engagement metrics (like count, comment count, repost count)
- Action buttons: Like, Comment, Repost, Tip, Share

### Article Card Component
- Featured image
- Article headline
- Author byline
- Read time estimate
- Preview excerpt (truncated)
- "Read full article" CTA

### Video Player Component
- HTML5 video player
- Play/pause button
- Progress bar
- Volume control
- Full-screen option
- Duration display

### Tip Modal Component
**Fields**:
- Recipient username
- Amount input (with currency selector)
- Payment method radio buttons:
  - 🪙 Crypto (USDC, ETH, BTC)
  - 📱 M-Pesa (mobile number input)
  - 🏦 Bank Transfer (account details)
- Cancel button
- Confirm/Send button

**Payment Method Details**:
1. **Crypto**: Show wallet address or QR code
2. **M-Pesa**: Phone number input field
3. **Bank**: Account number and routing info

---

### Waitlist Modal Component
**Purpose**: Collect early adopter information and build pre-launch community

**Layout**:
```
┌─────────────────────────────────────────┐
│  [×]                                    │
│                                         │
│  🌟 Join Our Vision                     │
│                                         │
│  Be part of reshaping journalism       │
│  in Africa. We're launching April 1st! │
│                                         │
│  Join the waitlist to get early access │
│  and exclusive updates as we build a   │
│  platform where truth matters more     │
│  than influence.                        │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Full Name *                     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Email Address *                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Phone Number *                  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ☐ I'm interested as:                  │
│    ☐ Journalist/Creator                │
│    ☐ Reader/Supporter                  │
│    ☐ Both                              │
│                                         │
│  [Cancel]  [Join Waitlist →]           │
│                                         │
│  Launch Date: April 1st, 2026          │
└─────────────────────────────────────────┘
```

**Fields**:
- **Full Name** (required, text input)
- **Email Address** (required, email validation)
- **Phone Number** (required, phone format validation)
- **Interest Type** (optional, checkbox group):
  - Journalist/Creator
  - Reader/Supporter
  - Both

**Welcome Message**:
> "Be part of reshaping journalism in Africa. We're launching April 1st!
>
> Join the waitlist to get early access and exclusive updates as we build a platform where truth matters more than influence."

**Success State** (after submission):
```
┌─────────────────────────────────────────┐
│  [×]                                    │
│                                         │
│  ✅ Welcome Aboard!                     │
│                                         │
│  Thank you for joining our vision.      │
│                                         │
│  We'll send you exclusive updates as    │
│  we prepare for our April 1st launch.  │
│                                         │
│  Keep an eye on your inbox for:        │
│  • Early access invitation             │
│  • Platform updates                    │
│  • Launch announcements                │
│                                         │
│  [Close]                                │
│                                         │
│  Follow us:                             │
│  [Twitter] [LinkedIn] [Instagram]       │
└─────────────────────────────────────────┘
```

**Button Styles**:
- Primary: Orange background (#FF5722), white text
- Hover: Slightly darker orange
- Disabled state while form is incomplete

**Validation**:
- Name: Minimum 2 characters
- Email: Valid email format
- Phone: Valid phone number (international format accepted)
- Show inline error messages for invalid inputs

---

## Technical Requirements

### Frontend Stack (Recommended)
- **Framework**: React + Next.js or Vite
- **Styling**: Tailwind CSS (for rapid dark mode styling)
- **Icons**: Lucide React or Heroicons
- **Routing**: React Router or Next.js routing
- **State Management**: React Context or Zustand (for modal states)

### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Mock Data Structure

**Post Object**:
```javascript
{
  id: "post_123",
  author: {
    username: "nickysap",
    displayName: "Nicky Sap",
    avatar: "/avatars/nicky.jpg",
    verified: true
  },
  type: "article" | "image" | "video" | "text",
  content: {
    text: "Some friends of mine were celebrating...",
    media: "/media/image.jpg" | "/media/video.mp4",
    article: {
      title: "Breaking: Government Corruption Exposed",
      excerpt: "An investigation reveals...",
      featuredImage: "/articles/featured.jpg",
      readTime: "8 min"
    }
  },
  timestamp: "2026-02-23T12:00:00Z",
  engagement: {
    likes: 13,
    comments: 3,
    reposts: 5,
    tips: 8
  }
}
```

**User Profile Object**:
```javascript
{
  id: "user_456",
  username: "ccarella",
  displayName: "C Carella",
  avatar: "/avatars/ccarella.jpg",
  banner: "/banners/ccarella.jpg",
  verified: true,
  bio: "Investigative journalist covering civic accountability in East Africa",
  location: "Nairobi, Kenya",
  website: "https://example.com",
  stats: {
    followers: 1200,
    following: 456,
    totalTipsReceived: "$1,234"
  }
}
```

---

## Demo Content Requirements

### Homepage Feed Should Show:

1. **Article Post Example**:
   - Author: @investigator_ken
   - Headline: "Uncovering Budget Mismanagement in County X"
   - Featured image of government building
   - Excerpt about investigation
   - Engagement: 245 likes, 67 comments, 89 reposts, 34 tips

2. **Image Post Example**:
   - Author: @photojournalist_asha
   - Caption: "Documenting climate change impact on Lake Victoria communities"
   - Full-width photo of fishing village
   - Engagement: 189 likes, 23 comments, 45 reposts, 12 tips

3. **Video Post Example**:
   - Author: @field_reporter_juma
   - Video: Field report from protest/civic event
   - Duration: 2:34
   - Caption: "Live from the ground: Citizens demand accountability"
   - Engagement: 567 likes, 134 comments, 234 reposts, 89 tips

4. **Text Post Example**:
   - Author: @analyst_wanjiku
   - Thread-style analysis of current events
   - No media attached
   - Engagement: 78 likes, 45 comments, 23 reposts, 5 tips

---

## UI/UX Specifications

### Color Palette
- **Background**: #1A1A1A (dark charcoal)
- **Surface**: #2D2D2D (lighter charcoal for cards)
- **Primary Accent**: #FF5722 (orange from branding)
- **Text Primary**: #FFFFFF (white)
- **Text Secondary**: #B0B0B0 (gray)
- **Success**: #4CAF50 (green for verified badges)
- **Border**: #3D3D3D (subtle borders)

### Typography
- **Headings**: System font stack (SF Pro, Segoe UI, Roboto)
- **Body**: Sans-serif, 16px base
- **Username**: Bold, 15px
- **Timestamp**: Regular, 14px, secondary color
- **Post Content**: Regular, 16px, line-height 1.5

### Spacing
- Post padding: 16px
- Card margin-bottom: 12px
- Button padding: 8px 16px
- Avatar margin-right: 12px

### Interactions
- **Hover States**: Slight opacity change (0.8) or background highlight
- **Button Hover**: Orange tint on tip button, gray on others
- **Like Animation**: Heart fills with red when clicked
- **Tip Modal**: Smooth fade-in with backdrop blur

---

## Deliverables Checklist

### Pages
- [ ] Landing page with hero, problem/solution, CTA
- [ ] Homepage with feed showing all 3 post types
- [ ] Profile page with user info and posts

### Components
- [ ] Post card (text, article, image, video variants)
- [ ] Tip payment modal with 3 payment options
- [ ] **Waitlist modal with form and success state**
- [ ] Article preview card
- [ ] Video player
- [ ] Engagement buttons (Like, Comment, Repost, Tip, Share)
- [ ] User profile header
- [ ] Navigation bar with waitlist button
- [ ] Tab navigation

### Functionality (Frontend Only)
- [ ] Modal open/close for tip payment
- [ ] **Waitlist modal open/close with form validation**
- [ ] **Form submission success state transition**
- [ ] Tab switching (Home/Following, Posts/Articles/Media)
- [ ] Like button toggle (visual feedback)
- [ ] Video play/pause controls
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] Share button (copy link simulation)
- [ ] **Form field validation (name, email, phone)**

### Assets
- [ ] Logo integration from `/public/logo/`
- [ ] Mock user avatars
- [ ] Sample article images
- [ ] Sample video placeholder
- [ ] Farcaster-inspired UI elements

---

## No Backend Required

This is a **static frontend demo** with:
- Hardcoded mock data in components
- No API calls
- No database
- No authentication (simulated logged-in state)
- No actual payment processing (modal UI only)
- No real blockchain integration

All interactions are visual/UI demonstrations for the demo presentation.

---

## Timeline: Tomorrow's Demo

**Focus**: Clean, polished UI demonstrating:
1. Free content access (no paywalls)
2. Tip-based creator support
3. Multiple content formats
4. Farcaster-inspired social experience
5. African mobile money integration concept

**Success Criteria**:
- Visually appealing dark mode interface
- All 3 pages navigable
- Tip modal demonstrates payment options
- **Waitlist modal with working form validation**
- **Clear April 1st launch messaging**
- Content types clearly differentiated
- Mobile responsive
- Logo properly integrated

---

## Build Instructions

### Quick Start
```bash
# Create React app with Vite
npm create vite@latest naked-journalism -- --template react

# Install dependencies
cd naked-journalism
npm install tailwindcss lucide-react react-router-dom

# Copy logo and mock images to public folder
# Start development server
npm run dev
```

### File Structure
```
src/
├── components/
│   ├── PostCard.jsx
│   ├── TipModal.jsx
│   ├── WaitlistModal.jsx
│   ├── ArticleCard.jsx
│   ├── VideoPlayer.jsx
│   ├── ProfileHeader.jsx
│   └── Navigation.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Home.jsx
│   └── Profile.jsx
├── data/
│   └── mockData.js
├── utils/
│   └── validation.js
├── App.jsx
└── main.jsx

public/
├── logo/
└── mock-images/
```

---

## Future Enhancements (Post-Demo)
- Backend integration with blockchain
- Real payment processing
- User authentication
- Content creation tools
- Crowdfunding campaigns
- Analytics dashboard
- Search functionality
- Notifications system

---

**Contact**: Fred Gitonga & Allan Robinson
**Demo Date**: Tomorrow
**Focus**: Frontend UI/UX demonstration
