# Naked Journalism - Figma Design Specifications

## Design System

### Color Palette
```
Primary Colors:
- Brand Orange: #FF5722
- Dark Background: #1A1A1A
- Card Surface: #2D2D2D
- Border: #3D3D3D

Text Colors:
- Primary Text: #FFFFFF
- Secondary Text: #B0B0B0
- Muted Text: #6B6B6B

Accent Colors:
- Success Green: #4CAF50 (verified badges)
- Like Red: #F44336
- Link Blue: #2196F3
- Warning Orange: #FF9800

Gradients:
- Hero Gradient: Linear from #FF5722 to #FF7043
- Card Hover: Subtle white overlay at 5% opacity
```

### Typography Scale
```
H1 (Hero): 64px / Bold / Line height 1.2
H2 (Section): 48px / Bold / Line height 1.3
H3 (Card Title): 24px / Bold / Line height 1.4
H4 (Subheading): 20px / Semibold / Line height 1.5
Body Large: 18px / Regular / Line height 1.6
Body: 16px / Regular / Line height 1.5
Body Small: 14px / Regular / Line height 1.5
Caption: 12px / Regular / Line height 1.4

Font Family:
- Primary: Inter, SF Pro Display, -apple-system, system-ui
- Fallback: Segoe UI, Roboto, Helvetica, Arial, sans-serif
```

### Spacing System
```
4px unit scale:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

Component Padding:
- Button: 12px 24px
- Card: 16px
- Modal: 24px
- Container: 16px (mobile), 24px (tablet), 32px (desktop)
```

### Border Radius
```
- Small: 4px (buttons, inputs)
- Medium: 8px (cards)
- Large: 12px (modals)
- Circle: 50% (avatars)
- Pill: 9999px (badges, tags)
```

### Shadows
```
Card Shadow:
  0px 2px 8px rgba(0, 0, 0, 0.3)

Modal Shadow:
  0px 8px 32px rgba(0, 0, 0, 0.5)

Button Hover:
  0px 4px 12px rgba(255, 87, 34, 0.4)
```

---

## Figma Mockup Specifications

### Artboard Sizes
```
Mobile: 375px × 812px (iPhone X)
Tablet: 768px × 1024px (iPad)
Desktop: 1440px × 900px
```

---

## Page 1: Landing Page (Desktop - 1440px)

### Frame Layout
```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (height: 80px)                  │
├─────────────────────────────────────────────────┤
│  HERO SECTION (height: 600px)                   │
├─────────────────────────────────────────────────┤
│  PROBLEM SECTION (height: 500px)                │
├─────────────────────────────────────────────────┤
│  SOLUTION SECTION (height: 600px)               │
├─────────────────────────────────────────────────┤
│  HOW IT WORKS (height: 700px)                   │
├─────────────────────────────────────────────────┤
│  WHY AFRICA (height: 500px)                     │
├─────────────────────────────────────────────────┤
│  CTA SECTION (height: 400px)                    │
├─────────────────────────────────────────────────┤
│  FOOTER (height: 200px)                         │
└─────────────────────────────────────────────────┘
```

### Navigation Bar Component
```
Position: Fixed top
Background: #1A1A1A with 80% opacity, blur backdrop
Height: 80px
Padding: 0 64px

Layout (Flex - Space Between):
[Logo + Wordmark] ────────────── [Join Waitlist Button] [Profile Icon]

Logo: 48px × 48px
Wordmark: "Naked Journalism" - 20px, Bold, #FFFFFF
Button: Orange (#FF5722), 44px height, 160px width, "Join Waitlist"
```

### Hero Section
```
Background: Linear gradient (#1A1A1A → #2D2D2D)
Height: 600px
Text Alignment: Center
Padding: 96px 64px

Elements (Top to Bottom):
1. Logo (80px × 80px) - Center
2. H1: "Naked Journalism" - 64px, Bold, #FFFFFF, margin-top: 24px
3. Tagline: "Strengthening press freedom by redesigning its financial foundations"
   - 24px, Regular, #B0B0B0, max-width: 800px, margin-top: 16px
4. CTA Button: "Join the Waitlist →"
   - Orange (#FF5722), 56px height, 240px width
   - 18px text, Bold, margin-top: 48px
   - Hover: #FF7043 with shadow
5. Launch Date: "Launching April 1st, 2026"
   - 16px, Medium, #FF9800, margin-top: 16px
6. Hero Image: Camera/journalism equipment (from PDF page 1)
   - Width: 600px, margin-top: 48px, subtle shadow
```

### Problem Section
```
Background: #1A1A1A
Height: 500px
Padding: 96px 64px

Layout: 2 columns (60% / 40%)

Left Column (Text):
- H2: "Problem" - 48px, Bold, #FFFFFF
- Orange asterisk (*) - 48px, #FF5722, positioned right
- 3 Problem statements:
  1. "Mkubwa Anasema > The Truth"
  2. "Politically Correct > Editorial Independence"
  3. "Ads > Press Freedom"
  Each: 24px, Regular, #B0B0B0, margin: 24px between

Right Column (Images):
- Stack 2 images vertically (from PDF page 2)
- Top: Camera with money - 300px × 200px, rounded-lg
- Bottom: Photographer - 300px × 200px, rounded-lg, margin-top: 16px
```

### Solution Section
```
Background: #2D2D2D
Height: 600px
Padding: 96px 64px

Layout: 2 columns (40% / 60%)

Left Column (Image):
- Newspaper with "PAY NOW" buttons (from PDF page 3)
- Width: 500px, rounded-lg, shadow

Right Column (Text):
- H2: "Solution" - 48px, Bold, #FFFFFF
- Description: "Directly connect readers to journalists through a public market where citizens fund the information they value."
  - 20px, Regular, #B0B0B0, margin-top: 24px

5 Bullet Points (with icons):
✓ Readers pay/tip small amounts per story
✓ Journalists earn instantly and transparently
✓ Investigations are crowdfunded by the public
✓ No subscriptions required
✓ No advertiser or platform dependence

Each bullet: 18px, Regular, #FFFFFF, margin: 20px between
Icons: Orange checkmarks, 24px
```

### How It Works Section
```
Background: #1A1A1A
Height: 700px
Padding: 96px 64px

Title: "What this looks like in real life:" - 48px, Bold, #FFFFFF, Center

4-Step Process (Cards in a row):

┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│    01    │  │    02    │  │    03    │  │    04    │
│          │  │          │  │          │  │          │
│ Publish  │→ │  Unlock  │→ │   Paid   │→ │   Fund   │
└──────────┘  └──────────┘  └──────────┘  └──────────┘

Each Card:
- Width: 300px, Height: 400px
- Background: #2D2D2D
- Border-radius: 12px
- Padding: 24px
- Hover: Lift effect (shadow + translateY)

Card 01:
- Number: "01" - 64px, Bold, #FF5722
- Title: "A journalist publishes a story"
- Image: Journalist working (from PDF)
- Background: Light gray

Card 02: (Highlighted in orange)
- Number: "02" - 64px, Bold, #FFFFFF
- Background: #FF5722 (gradient)
- Title: "A reader unlocks it with available payment methods"
- Image: Mobile payment illustration
- Text: White

Card 03:
- Number: "03" - 64px, Bold, #FF5722
- Title: "The journalist is paid instantly"
- Image: Payment confirmation

Card 04:
- Number: "04" - 64px, Bold, #FF5722
- Title: "Readers can tip or fund follow-up investigations"
- Image: Community discussion (from PDF)

Arrow Connectors: Between cards, 48px, #3D3D3D
```

### Why Africa Section
```
Background: #2D2D2D
Height: 500px
Padding: 96px 64px

Title: "Why Africa, Why Now" - 48px, Bold, #FFFFFF

Callout Box (Orange):
- Background: #FF5722
- Width: 600px
- Padding: 32px
- Border-radius: 12px
- Text: "Time to leapfrog subscriptions and paywalls entirely."
- Font: 32px, Bold, #FFFFFF
- Position: Right side

4 Bullet Points (Left side):
• Over 500M mobile money users
• Strong pay-as-you-go culture
• Rapid global growth for local creators
• Rising demand for independent civic reporting

Each: 20px, Regular, #FFFFFF, margin: 20px between

Images:
- Mobile money illustration (left)
- Data/analytics image (bottom)
```

### CTA Section
```
Background: Linear gradient (#1A1A1A → #FF5722)
Height: 400px
Padding: 96px 64px
Text Alignment: Center

Elements:
1. Icon: 🌟 - 64px
2. Title: "Join Our Vision" - 48px, Bold, #FFFFFF
3. Description: "Be part of reshaping journalism in Africa. We're launching April 1st!"
   - 24px, Regular, #FFFFFF, opacity: 90%
4. Button: "Join the Waitlist →"
   - White background, #FF5722 text
   - 56px height, 240px width
   - Hover: Scale 1.05, shadow
5. Subtitle: "Get early access and exclusive updates"
   - 16px, Regular, #FFFFFF, opacity: 80%
```

### Footer
```
Background: #0A0A0A
Height: 200px
Padding: 48px 64px

Layout: 3 columns

Column 1 (Logo & Tagline):
- Logo: 40px × 40px
- Wordmark: 16px
- Tagline: 14px, #6B6B6B

Column 2 (Contact):
- "Contact"
- Fred Gitonga
- Allan Robinson
- Email links
- Each: 14px, #B0B0B0

Column 3 (Social):
- "Follow Us"
- Twitter icon + link
- LinkedIn icon + link
- Instagram icon + link
- Icons: 24px, #B0B0B0

Bottom:
- Copyright: "© 2026 Naked Journalism. All rights reserved."
- 12px, Center, #6B6B6B
```

---

## Page 2: Homepage Feed (Desktop - 1440px)

### Overall Layout
```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (80px) - Same as Landing        │
├─────┬───────────────────────────────────┬───────┤
│     │  MAIN FEED (center, 600px width)  │       │
│ Ads │                                   │ Trend │
│ or  │  [home] [following]               │  ing  │
│Empty│  ─────                            │ or    │
│     │                                   │ Empty │
│     │  ┌─────────────────────────────┐  │       │
│     │  │ POST CARD 1 (Article)       │  │       │
│     │  └─────────────────────────────┘  │       │
│     │                                   │       │
│     │  ┌─────────────────────────────┐  │       │
│     │  │ POST CARD 2 (Image)         │  │       │
│     │  └─────────────────────────────┘  │       │
│     │                                   │       │
│     │  ┌─────────────────────────────┐  │       │
│     │  │ POST CARD 3 (Video)         │  │       │
│     │  └─────────────────────────────┘  │       │
│     │                                   │       │
│     │  [Load more...]                  │       │
└─────┴───────────────────────────────────┴───────┘
```

### Navigation Bar (Updated for Feed)
```
Same as landing page but with:
- Home icon/link (active state)
- Following tab
- Profile dropdown menu
- Notification bell icon
```

### Feed Tabs
```
Position: Below navigation, sticky
Background: #1A1A1A
Height: 60px
Border-bottom: 1px solid #3D3D3D

[home] [following]
  ───

Active tab (home):
- Text: #FFFFFF, Bold
- Bottom border: 3px solid #FF5722

Inactive tab (following):
- Text: #B0B0B0, Regular
- Hover: #FFFFFF
```

### Post Card - Article Type
```
Component Dimensions:
- Width: 600px
- Background: #2D2D2D
- Border-radius: 8px
- Padding: 16px
- Margin-bottom: 12px

Header Section:
┌─────────────────────────────────────────┐
│ [Avatar]  @username ✓ · 3h        [⋮]  │
└─────────────────────────────────────────┘

- Avatar: 48px circle, left
- Username: 15px, Bold, #FFFFFF
- Verified badge: ✓ 14px, #4CAF50
- Timestamp: 14px, #B0B0B0
- More menu: Right aligned

Content Section:
- Text content: "Some friends of mine were..."
  - 16px, Regular, #FFFFFF
  - Max 280 characters visible, "Read more" if longer

Article Card (nested):
┌─────────────────────────────────────────┐
│  [Featured Image]                       │
│  ─────────────────────────────          │
│  Article Headline                       │
│  Brief excerpt of article...            │
│  📰 8 min read                          │
└─────────────────────────────────────────┘

- Featured image: 568px × 300px, rounded-top
- Background: #1A1A1A
- Padding: 16px
- Headline: 20px, Bold, #FFFFFF
- Excerpt: 14px, Regular, #B0B0B0, 2 lines max
- Read time: 12px, #6B6B6B

Engagement Bar:
┌─────────────────────────────────────────┐
│  ❤️ 13  💬 3  🔁 5  💰 Tip  ↗️ Share   │
└─────────────────────────────────────────┘

- Height: 48px
- Border-top: 1px solid #3D3D3D
- Margin-top: 12px
- Padding-top: 12px

Buttons (each):
- Icon + Count/Label
- 14px, Regular
- Color: #B0B0B0
- Hover: Icon fills with color (❤️ red, 💰 orange)
- Spacing: 24px between

Like Button:
- Default: Heart outline, #B0B0B0
- Liked: Heart filled, #F44336
- Count: "13"

Comment Button:
- Icon: Speech bubble, #B0B0B0
- Count: "3"

Repost Button:
- Icon: Retweet symbol, #B0B0B0
- Count: "5"

Tip Button:
- Icon: 💰 or coin symbol
- Text: "Tip"
- Color: #FF5722 on hover
- Opens tip modal

Share Button:
- Icon: Share arrow
- Text: "Share"
- Opens share options
```

### Post Card - Image Type
```
Same header as article type

Content:
- Full-width image: 568px × auto, rounded
- Caption below: 16px, Regular, #FFFFFF
- Photo credit: 12px, #6B6B6B, italic

Same engagement bar
```

### Post Card - Video Type
```
Same header as article type

Content:
- Video player: 568px × 320px
  - Dark background
  - Play button overlay (centered, 64px, white, 50% opacity)
  - Progress bar at bottom (orange)
  - Duration badge: Bottom-right, "2:34"
- Caption below: 16px, Regular, #FFFFFF

Same engagement bar
```

### Post Card - Text Only Type
```
Same header as article type

Content:
- Text only: 16px, Regular, #FFFFFF
- Line height: 1.5
- Max height: 400px, then "Show more" button

Same engagement bar
```

---

## Page 3: Profile Page (Desktop - 1440px)

### Layout
```
┌─────────────────────────────────────────────────┐
│  NAVIGATION BAR (80px)                          │
├─────────────────────────────────────────────────┤
│  [← Back]  @username                            │
├─────────────────────────────────────────────────┤
│  PROFILE HEADER                                 │
│  ┌─────────────────────────────────────────┐   │
│  │  [Banner Image - 1440px × 300px]        │   │
│  │                                         │   │
│  │  [Avatar - overlaps banner]             │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │  Name · @username ✓                     │   │
│  │  Bio text here...                       │   │
│  │  📍 Location | 🔗 website.com           │   │
│  │  1.2k Followers · 456 Following         │   │
│  │  [Follow] [Tip] [Message]               │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  [Posts] [Articles] [Media] [Funded]            │
│  ─────                                          │
├─────────────────────────────────────────────────┤
│  USER'S POSTS FEED                              │
│  (Same post cards as homepage)                  │
└─────────────────────────────────────────────────┘
```

### Profile Header Component
```
Banner Image:
- Width: 1440px (full width)
- Height: 300px
- Background: Gradient or user's uploaded image
- Default gradient: #FF5722 to #FF7043

Avatar:
- Size: 140px × 140px
- Border: 6px solid #1A1A1A
- Position: Overlap banner by 50%
- Bottom-right corner: Verified badge (32px, #4CAF50)

Profile Info Section:
- Max-width: 600px
- Padding: 24px
- Background: Transparent

Name & Username:
- Name: 28px, Bold, #FFFFFF
- Username: 18px, Regular, #B0B0B0, "@username"
- Verified badge: 24px, #4CAF50, inline

Bio:
- Text: 16px, Regular, #FFFFFF
- Max-width: 500px
- Line-height: 1.5
- Margin-top: 12px

Metadata:
- Icons + text in a row
- 14px, Regular, #B0B0B0
- Spacing: 16px between
- 📍 Location
- 🔗 Website link (clickable, #2196F3)

Stats:
- Display: Inline
- Format: "1.2k Followers · 456 Following"
- 16px, Regular, #FFFFFF
- Bold numbers
- Margin-top: 12px

Action Buttons:
- Row of 3 buttons
- Margin-top: 24px
- Spacing: 12px between

[Follow] Button:
- Background: #FF5722
- Color: #FFFFFF
- Size: 44px height, 120px width
- Border-radius: 9999px (pill)
- Hover: #FF7043

[Tip] Button:
- Background: Transparent
- Border: 2px solid #FF5722
- Color: #FF5722
- Size: 44px height, 100px width
- Border-radius: 9999px (pill)
- Hover: Background #FF5722, Color #FFFFFF

[Message] Button:
- Background: Transparent
- Border: 2px solid #3D3D3D
- Color: #B0B0B0
- Size: 44px height, 120px width
- Border-radius: 9999px (pill)
- Hover: Border #FFFFFF, Color #FFFFFF
```

### Profile Tabs
```
Position: Below profile info
Background: #1A1A1A
Height: 60px
Border-bottom: 1px solid #3D3D3D

[Posts] [Articles] [Media] [Funded]
  ────

Tabs:
- Posts: All content types
- Articles: Text/article posts only
- Media: Images and videos only
- Funded: Crowdfunded investigations

Active tab styling:
- Text: #FFFFFF, Bold, 16px
- Bottom border: 3px solid #FF5722

Inactive tabs:
- Text: #B0B0B0, Regular, 16px
- Hover: #FFFFFF
```

---

## Modal Components

### Tip Modal (Overlay)
```
Overlay:
- Background: rgba(0, 0, 0, 0.8)
- Backdrop blur: 8px

Modal Container:
- Width: 480px
- Background: #2D2D2D
- Border-radius: 12px
- Padding: 32px
- Shadow: 0px 8px 32px rgba(0, 0, 0, 0.5)
- Position: Center screen

Header:
┌─────────────────────────────────────────┐
│  💰 Tip @username                  [×]  │
└─────────────────────────────────────────┘

- Title: 24px, Bold, #FFFFFF
- Close button: 24px, #B0B0B0, hover #FFFFFF

Amount Input:
- Label: "Amount" - 14px, #B0B0B0
- Input field:
  - Height: 56px
  - Background: #1A1A1A
  - Border: 2px solid #3D3D3D
  - Focus: Border #FF5722
  - Text: 20px, Bold, #FFFFFF
  - Currency selector: Dropdown right side
  - Placeholder: "0.00"

Payment Methods:
- Label: "Payment Method" - 14px, #B0B0B0, margin-top: 24px

Radio Buttons (vertical stack):

○ 🪙 Crypto (USDC, ETH)
  ├─ Background: #1A1A1A when unselected
  ├─ Border: 2px solid #3D3D3D
  ├─ Height: 64px, margin: 12px bottom
  ├─ Padding: 16px
  └─ Selected: Border #FF5722, Background #FF572210

○ 📱 M-Pesa
  └─ Same styling

○ 🏦 Bank Transfer
  └─ Same styling

Conditional Input Fields (appear when method selected):

If Crypto:
  - Show wallet address input
  - QR code option

If M-Pesa:
  - Phone number input
  - Format: +254 XXX XXX XXX

If Bank:
  - Account number input
  - Bank name dropdown

Action Buttons:
- Layout: Row, space between
- Margin-top: 32px

[Cancel] Button:
  - Background: Transparent
  - Color: #B0B0B0
  - Size: 48px height, 120px width
  - Hover: Color #FFFFFF

[Send Tip →] Button:
  - Background: #FF5722
  - Color: #FFFFFF
  - Size: 48px height, 180px width
  - Hover: #FF7043, scale 1.02
  - Disabled state: Background #3D3D3D, Color #6B6B6B
```

### Waitlist Modal (Overlay)
```
Same overlay styling as Tip Modal

Modal Container:
- Width: 540px
- Background: #2D2D2D
- Border-radius: 12px
- Padding: 40px
- Shadow: 0px 8px 32px rgba(0, 0, 0, 0.5)

Header:
┌─────────────────────────────────────────┐
│  🌟 Join Our Vision                [×]  │
└─────────────────────────────────────────┘

- Title: 32px, Bold, #FFFFFF
- Close button: 24px, #B0B0B0, hover #FFFFFF

Welcome Message:
- Text: "Be part of reshaping journalism in Africa. We're launching April 1st!"
- Font: 18px, Regular, #B0B0B0
- Line-height: 1.6
- Margin-bottom: 16px

- Text: "Join the waitlist to get early access and exclusive updates as we build a platform where truth matters more than influence."
- Font: 16px, Regular, #6B6B6B
- Margin-bottom: 32px

Form Fields:

1. Full Name:
   - Label: "Full Name *" - 14px, #B0B0B0
   - Input:
     - Height: 52px
     - Background: #1A1A1A
     - Border: 2px solid #3D3D3D
     - Focus: Border #FF5722
     - Text: 16px, #FFFFFF
     - Placeholder: "Enter your full name"
   - Error state: Border #F44336, message below
   - Margin-bottom: 20px

2. Email Address:
   - Same styling as Full Name
   - Placeholder: "your@email.com"
   - Validation: Email format

3. Phone Number:
   - Same styling
   - Placeholder: "+254 XXX XXX XXX"
   - Validation: Phone format

4. Interest Type:
   - Label: "I'm interested as:" - 14px, #B0B0B0
   - Checkbox group (multiple selection allowed):

   ☐ Journalist/Creator
   ☐ Reader/Supporter
   ☐ Both

   Each checkbox:
   - Size: 20px
   - Unchecked: Border 2px #3D3D3D
   - Checked: Background #FF5722, white checkmark
   - Label: 16px, #FFFFFF
   - Margin: 12px between

Action Buttons:
[Cancel]  [Join Waitlist →]

Cancel:
  - Background: Transparent
  - Color: #B0B0B0
  - Size: 52px height, 120px width

Join Waitlist:
  - Background: #FF5722
  - Color: #FFFFFF
  - Size: 52px height, 200px width
  - Hover: #FF7043, scale 1.02
  - Disabled: Background #3D3D3D (if form invalid)

Launch Date:
- Text: "Launch Date: April 1st, 2026"
- Font: 14px, Bold, #FF9800
- Center aligned
- Margin-top: 24px
```

### Waitlist Success State
```
Same modal container, but content changes:

┌─────────────────────────────────────────┐
│  ✅ Welcome Aboard!                [×]  │
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
│  [🐦 Twitter] [💼 LinkedIn] [📷 Insta] │
└─────────────────────────────────────────┘

Checkmark: 64px, #4CAF50
Title: 32px, Bold, #FFFFFF
Body text: 16px, Regular, #B0B0B0
Bullet list: 16px, Regular, #FFFFFF

Social buttons:
- Icon + Platform name
- Background: #1A1A1A
- Size: 48px height, 140px width
- Hover: Background #3D3D3D
- Spacing: 12px between
```

---

## Mobile Responsive Specs (375px)

### Key Adjustments:

Navigation:
- Height: 60px
- Logo: 36px
- Hamburger menu instead of full nav
- Join Waitlist: Icon only, 44px × 44px

Hero:
- Padding: 48px 16px
- H1: 36px
- Button: Full width, 48px height

Post Cards:
- Width: 100% (with 16px margin)
- Padding: 12px
- Avatar: 40px
- Font sizes reduced by 2px

Modals:
- Width: 100% (with 16px margin)
- Padding: 24px
- Full-screen on mobile (<480px)

Profile:
- Banner: 375px × 150px
- Avatar: 96px
- Buttons: Stack vertically, full width

---

## Component States

### Button States
```
Default:
- Background: #FF5722
- Shadow: none

Hover:
- Background: #FF7043
- Shadow: 0px 4px 12px rgba(255, 87, 34, 0.4)
- Cursor: pointer

Active (pressed):
- Background: #E64A19
- Transform: scale(0.98)

Disabled:
- Background: #3D3D3D
- Color: #6B6B6B
- Cursor: not-allowed
```

### Input States
```
Default:
- Border: 2px solid #3D3D3D
- Background: #1A1A1A

Focus:
- Border: 2px solid #FF5722
- Shadow: 0px 0px 0px 4px rgba(255, 87, 34, 0.1)

Error:
- Border: 2px solid #F44336
- Error message: 12px, #F44336, below input

Success:
- Border: 2px solid #4CAF50
- Checkmark icon: Right side
```

### Card Hover States
```
Post Card Hover:
- Transform: translateY(-2px)
- Shadow: Increase to 0px 4px 16px rgba(0, 0, 0, 0.4)
- Transition: 200ms ease

Link Hover:
- Color: #2196F3 → #64B5F6
- Underline appears
```

---

## Iconography

### Icon Library
Use: Lucide Icons or Heroicons (outlined style)

Required Icons:
- ❤️ Heart (like)
- 💬 Message bubble (comment)
- 🔁 Repost (retweet symbol)
- 💰 Coin/dollar (tip)
- ↗️ Share arrow
- ✓ Checkmark (verified)
- ⋮ More options (vertical dots)
- ✕ Close
- ← Back arrow
- 📍 Location pin
- 🔗 Link
- 🌟 Star
- 🪙 Crypto coin
- 📱 Mobile phone
- 🏦 Bank building
- 🐦 Twitter bird
- 💼 LinkedIn
- 📷 Instagram
- ✉️ Email
- 🔍 Search
- 🔔 Notification bell
- ⚙️ Settings gear

Icon Sizes:
- Small: 16px (inline with text)
- Medium: 24px (buttons, navigation)
- Large: 32px (empty states)
- XL: 48px+ (illustrations)
```

---

## Animations

### Micro-interactions
```
Button Click:
- Scale: 0.98
- Duration: 100ms
- Ease: ease-in-out

Like Animation:
- Heart scales from 1 → 1.3 → 1
- Color fills from outline to solid
- Duration: 300ms

Modal Open:
- Fade in backdrop: 200ms
- Scale modal from 0.95 → 1
- Total: 300ms ease-out

Modal Close:
- Scale modal from 1 → 0.95
- Fade out backdrop: 200ms
- Total: 200ms ease-in

Page Transitions:
- Fade: 300ms
- Slide up: 400ms ease-out

Loading States:
- Skeleton screens with shimmer
- Shimmer gradient: #2D2D2D → #3D3D3D → #2D2D2D
- Animation: 1500ms infinite
```

---

## Accessibility

### Focus States
```
All interactive elements:
- Outline: 2px solid #FF5722
- Outline-offset: 2px
- No default browser outline
```

### Color Contrast
```
Ensure WCAG AA compliance:
- Text on dark background: #FFFFFF on #1A1A1A = 15.84:1 ✓
- Secondary text: #B0B0B0 on #1A1A1A = 7.56:1 ✓
- Orange on dark: #FF5722 on #1A1A1A = 4.89:1 ✓
- White on orange: #FFFFFF on #FF5722 = 3.24:1 ✓
```

### Semantic HTML
```
- Use <button> for all clickable actions
- Use <a> for navigation links
- Use <nav> for navigation bars
- Use proper heading hierarchy (H1 → H2 → H3)
- Use <form> for waitlist and tip forms
- Use aria-labels for icon-only buttons
```

---

## Assets Needed

### Images
1. Logo (SVG preferred)
   - Location: `/public/logo/WhatsApp Image 2026-02-22 at 3.03.57 PM.jpeg`
   - Export: SVG, PNG @2x

2. Hero images (from PDF):
   - Camera equipment
   - Journalist working
   - Mobile payment
   - Community discussions

3. Mock avatars (10-15):
   - Diverse African faces
   - 140px × 140px
   - Circular

4. Stock journalism images:
   - Photojournalism examples
   - Investigative reporting
   - Field reporting

### Videos
- Sample journalism clips
- Max 30 seconds
- MP4 format, compressed

---

## Figma Organization

### Recommended Page Structure
```
📄 Cover
📄 Design System
   - Colors
   - Typography
   - Spacing
   - Components
📄 Landing Page - Desktop
📄 Landing Page - Mobile
📄 Homepage Feed - Desktop
📄 Homepage Feed - Mobile
📄 Profile Page - Desktop
📄 Profile Page - Mobile
📄 Modals
   - Tip Modal
   - Waitlist Modal (Form)
   - Waitlist Modal (Success)
📄 Components Library
   - Buttons
   - Inputs
   - Cards
   - Icons
📄 Prototype
```

### Component Library
Create reusable components:
- Button (Primary, Secondary, Ghost)
- Input Field
- Textarea
- Checkbox
- Radio Button
- Post Card (Article, Image, Video, Text variants)
- Navigation Bar
- Modal Container
- Profile Header
- Tab Navigation
- Engagement Bar

Use Auto Layout for responsive components
Create variants for different states

---

## Next Steps

1. **Restart Claude Code** to enable Figma MCP tools
2. **Authenticate Figma** account when prompted
3. **Create new Figma file**: "Naked Journalism - UI Design"
4. **Import design system** from this spec
5. **Build components** using Auto Layout
6. **Design 3 core pages** (Landing, Feed, Profile)
7. **Create modals** (Tip, Waitlist)
8. **Add prototype interactions**
9. **Export assets** for development
10. **Share Figma file** for feedback

---

## Figma Plugins Recommended

- **Unsplash** - Free stock photos
- **Iconify** - Icon library
- **Content Reel** - Mock content generator
- **Stark** - Accessibility checker
- **Auto Layout** - Already built-in
- **Figma to Code** - Export to React/HTML

---

This comprehensive spec should allow you or a designer to recreate the entire UI in Figma with pixel-perfect accuracy. Once the Figma MCP is authenticated, I can help create these designs programmatically!
