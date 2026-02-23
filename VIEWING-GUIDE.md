# Naked Journalism - Viewing Guide

## 🌐 Current Status

**Development Server**: Running on http://localhost:3002

**Status**: ⚠️ Currently showing 500 error due to Tailwind CSS v4/Turbopack configuration

## 📱 What We've Built (Ready for Demo)

### ✅ 3 Complete Pages

1. **Landing Page** (`/`)
   - Hero with animated logo
   - "Join Waitlist" CTA buttons
   - Problem section
   - Solution with 5 key features
   - How It Works (4-step visual guide)
   - Why Africa section
   - Final CTA section
   - Footer with social links

2. **Homepage Feed** (`/feed`)
   - Sticky navigation
   - Home/Following tabs
   - Post cards with 4 types:
     - 📰 Article posts with featured images
     - 🖼️ Image posts with captions
     - 🎥 Video posts with play buttons
     - 📝 Text-only posts
   - Engagement buttons: ❤️ Like, 💬 Comment, 🔁 Repost, 💰 Tip, ↗️ Share
   - Real-time like animation

3. **Profile Page** (`/profile/investigator_ken`)
   - Banner image
   - Avatar with verification badge
   - Bio, location, website
   - Stats (followers, following, tips)
   - Action buttons (Follow, Tip, Message)
   - Content tabs (Posts, Articles, Media, Funded)
   - User's posts feed

### ✅ 2 Interactive Modals

1. **Waitlist Modal**
   - Welcome message with April 1st launch date
   - Form fields:
     - Full Name (validated)
     - Email (validated)
     - Phone Number (validated)
     - Interest checkboxes (Journalist/Creator, Reader/Supporter, Both)
   - Success state with next steps
   - Social media links

2. **Tip Modal**
   - Amount input with currency selector
   - 3 payment methods:
     - 🪙 Crypto (wallet address input)
     - 📱 M-Pesa (phone number input)
     - 🏦 Bank Transfer (account number + bank dropdown)
   - Conditional fields based on payment method
   - Send Tip button

### ✅ Design System

**Colors**:
- Brand Orange: #FF5722
- Dark Background: #1A1A1A
- Card Surface: #2D2D2D
- Text Primary: #FFFFFF
- Success Green: #4CAF50 (verified badges)

**Responsive**: Mobile (375px) → Tablet (768px) → Desktop (1440px)

**Components**:
- Reusable Button component (3 variants)
- Navigation with mobile menu
- Footer with social links
- Post card (supports all 4 content types)

---

## 🔧 How to Fix & View Locally

### Option 1: Quick Fix (Downgrade Tailwind)
```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3.4.1 autoprefixer
npx tailwindcss init -p
```

Then update `tailwind.config.ts` and `postcss.config.mjs` to v3 format.

### Option 2: Deploy to Vercel (Recommended ⭐)
Vercel's build system handles Tailwind CSS v4 automatically:
```bash
vercel --prod
```

This will give you a live URL for tomorrow's demo!

---

## 🎯 What You Can Demo Tomorrow

### 1. Landing Page
- Show the hero with animated logo
- Click "Join Waitlist" → Waitlist modal opens
- Fill out form → Success state
- Scroll through all sections
- Mobile responsive view

### 2. Homepage Feed
- Show different post types
- Click Like → Heart fills with animation
- Click Tip → Tip modal opens with 3 payment options
- Show Crypto/M-Pesa/Bank payment flows
- Click profile → Navigate to profile page

### 3. Profile Page
- Show profile header with stats
- Click Follow → Toggle following state
- Click Tip → Tip modal opens for this user
- Show content tabs
- Scroll through user's posts

### 4. Modals
- **Waitlist**: Form validation, success state, April 1st messaging
- **Tip**: 3 payment methods with conditional fields

---

## 📁 Code Structure

```
naked-journalism/
├── app/
│   ├── page.tsx              # Landing page
│   ├── feed/page.tsx         # Homepage feed
│   ├── profile/[username]/   # Profile pages
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── landing/              # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyAfrica.tsx
│   │   └── CTASection.tsx
│   │
│   ├── feed/                 # Feed components
│   │   ├── FeedTabs.tsx
│   │   └── PostCard.tsx      # Supports 4 post types
│   │
│   ├── profile/              # Profile components
│   │   ├── ProfileHeader.tsx
│   │   └── ProfileTabs.tsx
│   │
│   ├── modals/               # Modal components
│   │   ├── WaitlistModal.tsx
│   │   └── TipModal.tsx
│   │
│   ├── Navigation.tsx        # Global navigation
│   ├── Footer.tsx            # Global footer
│   └── Button.tsx            # Reusable button
│
├── lib/
│   ├── mockData.ts          # Sample posts & users
│   └── utils.ts             # Utility functions
│
└── docs/                    # Documentation
    ├── FRONTEND-DELIVERABLES.md
    ├── FIGMA-DESIGN-SPECS.md
    └── FIGMA-RESOURCES.md
```

---

## 🎨 Mock Data

We have **4 mock users**:
- @investigator_ken - Kenneth Ochieng (12.5k followers)
- @photojournalist_asha - Asha Mohammed (8.9k followers)
- @field_reporter_juma - Juma Mwangi (15.2k followers)
- @analyst_wanjiku - Wanjiku Kamau (6.7k followers)

And **4 sample posts** demonstrating all content types:
1. Article post (budget investigation)
2. Image post (climate change photography)
3. Video post (protest coverage)
4. Text post (policy analysis)

---

## 🚀 Routes Available

- `/` - Landing page
- `/feed` - Homepage feed
- `/profile/investigator_ken` - Kenneth's profile
- `/profile/photojournalist_asha` - Asha's profile
- `/profile/field_reporter_juma` - Juma's profile
- `/profile/analyst_wanjiku` - Wanjiku's profile

---

## 📊 Features Checklist

### Landing Page
- [x] Hero with logo
- [x] Join Waitlist CTAs (3 locations)
- [x] Problem section
- [x] Solution section
- [x] How It Works (4 steps)
- [x] Why Africa section
- [x] Final CTA
- [x] Footer
- [x] Mobile responsive

### Feed
- [x] Navigation with Join Waitlist
- [x] Feed tabs (Home/Following)
- [x] Article post cards
- [x] Image post cards
- [x] Video post cards
- [x] Text post cards
- [x] Like button (with animation)
- [x] Comment button
- [x] Repost button
- [x] Tip button (opens modal)
- [x] Share button
- [x] Mobile responsive

### Profile
- [x] Banner image
- [x] Avatar with verification
- [x] Bio and metadata
- [x] Stats (followers, following, tips)
- [x] Follow button (toggles)
- [x] Tip button (opens modal)
- [x] Message button
- [x] Content tabs
- [x] User posts feed
- [x] Mobile responsive

### Modals
- [x] Waitlist form with validation
- [x] Success state
- [x] April 1st launch messaging
- [x] Interest checkboxes
- [x] Social links
- [x] Tip modal with amount input
- [x] Crypto payment option
- [x] M-Pesa payment option
- [x] Bank transfer option
- [x] Conditional fields

---

## 🔗 Next Steps for Demo

1. **Deploy to Vercel** (fixes build issues)
2. **Set up Supabase** for waitlist data
3. **Create Figma mockups** from live site
4. **Prepare demo script**

---

## 💡 Demo Tips

1. **Start with Landing Page** - Show the vision
2. **Open Waitlist Modal** - Demonstrate April 1st launch
3. **Navigate to Feed** - Show content variety
4. **Interact with Posts** - Like, tip, share
5. **Visit Profile** - Show journalist features
6. **Mobile View** - Show responsive design

---

## 🆘 Troubleshooting

**If localhost:3002 shows error**:
→ Deploy to Vercel for working version

**If modals don't open**:
→ Check browser console for errors

**If styles look broken**:
→ Tailwind CSS build issue, deploy to Vercel

---

**Built with**: Next.js 16, TypeScript, Tailwind CSS v4, Lucide Icons
**For**: Tomorrow's Demo (February 24, 2026)
**Launch Date**: April 1st, 2026 🚀
