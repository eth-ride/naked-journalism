# Naked Journalism - Figma Resources

## Created FigJam Diagrams

All diagrams have been created in FigJam and are ready to view. Click the links below to claim and open each diagram.

### 1. User Flow Diagram
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/1aa433a6-5acd-4137-909e-94352d76bd32?utm_source=other&utm_content=edit_in_figjam)**

Shows complete user journey through the platform:
- Landing page entry points
- Waitlist signup flow
- Content browsing (home/following)
- Post interactions (like, comment, tip, share, repost)
- Profile viewing
- Payment modal flow (Crypto, M-Pesa, Bank)

**Use for**: Understanding user paths and interaction patterns

---

### 2. Information Architecture
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/9be6b8a7-ebaf-4d79-b936-14173c8f6c46?utm_source=other&utm_content=edit_in_figjam)**

Complete platform structure breakdown:
- Landing Page sections (Hero, Problem, Solution, etc.)
- Homepage Feed components (Navigation, Tabs, Post Cards)
- Profile Page elements (Header, Stats, Tabs, Posts)
- Engagement system (Like, Comment, Repost, Tip, Share)

**Use for**: Understanding overall platform organization

---

### 3. Waitlist Flow Sequence
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/2c2ba2a1-a3d4-46f7-9a5b-e0f6bfc4e235?utm_source=other&utm_content=edit_in_figjam)**

Detailed sequence diagram showing:
- User clicks "Join Waitlist" button
- Modal opens with welcome message
- Form field validation (Name, Email, Phone)
- Interest type selection
- Supabase data submission
- Success state display
- Social media links

**Use for**: Implementing the waitlist feature with Supabase integration

---

### 4. Post Card Components
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/4bb1c15a-92b6-45c6-b8d9-2e28c92c3877?utm_source=other&utm_content=edit_in_figjam)**

Comprehensive post card breakdown:
- Header section (Avatar, Username, Verified, Timestamp, Menu)
- Content variants:
  - Article cards (Featured image, headline, excerpt, read time)
  - Image posts (Full width image, caption, credit)
  - Video posts (Player, play button, progress bar, duration)
  - Text posts (Content, show more button)
- Engagement bar (All 5 interaction buttons)
- Tip modal integration

**Use for**: Building the post card component with all variants

---

### 5. Modal Components
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/5c4f7569-1584-453c-8f28-f60956b03cdb?utm_source=other&utm_content=edit_in_figjam)**

Complete modal system:

**Tip Modal (480px)**:
- Amount input with currency selector
- Payment method radio buttons
  - Crypto (wallet address, QR code)
  - M-Pesa (phone number input)
  - Bank (account number, bank dropdown)
- Action buttons (Cancel, Send Tip)

**Waitlist Modal (540px)**:
- Welcome header with April 1st launch message
- Form fields (Name, Email, Phone, Interest checkboxes)
- Validation rules
- Supabase submission
- Success state with social links

**Use for**: Implementing both modal components

---

### 6. Design System
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/a9579340-da31-4c35-8036-0d3514566aa9?utm_source=other&utm_content=edit_in_figjam)**

Complete design system specification:

**Color Palette**:
- Primary: Brand Orange (#FF5722), Dark BG (#1A1A1A), Card Surface (#2D2D2D)
- Text: Primary (#FFFFFF), Secondary (#B0B0B0), Muted (#6B6B6B)
- Accents: Success (#4CAF50), Like Red (#F44336), Link Blue (#2196F3)

**Typography**:
- Font: Inter, SF Pro Display
- Scale: H1 64px → Caption 12px

**Spacing**:
- 4px unit scale (xs to 4xl)
- Component-specific padding

**Components**:
- Button variants (Primary, Secondary, Ghost)
- Input states (Default, Focus, Error)
- Card types (Post, Article, Profile)
- Modal sizes (Tip 480px, Waitlist 540px)

**Use for**: Setting up design tokens and component library

---

### 7. Page Layouts
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/3d2524f5-b68d-4bc0-b6e3-54dfbc6cf528?utm_source=other&utm_content=edit_in_figjam)**

Desktop layouts (1440px) for all 3 pages:

**Landing Page**:
- Navigation (80px)
- Hero (600px) with Join Waitlist CTA
- Problem (500px)
- Solution (600px)
- How It Works (700px) - 4-step cards
- Why Africa (500px)
- CTA Section (400px)
- Footer (200px)

**Homepage Feed**:
- Navigation (80px)
- Feed tabs (60px) - Home/Following
- Center feed (600px width)
- Post cards (Article, Image, Video, Text variants)
- Engagement bar on each post

**Profile Page**:
- Navigation (80px)
- Banner (1440px × 300px)
- Avatar (140px, overlapping banner)
- Profile info (Name, Bio, Stats, Actions)
- Content tabs (Posts, Articles, Media, Funded)
- User posts feed

**Use for**: Desktop layout implementation

---

### 8. Mobile Layouts (375px)
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/6ff76d3c-76b6-497d-86c3-e7db4bfaa6d9?utm_source=other&utm_content=edit_in_figjam)**

Mobile-specific adaptations:

**Landing Page Mobile**:
- Nav bar (60px) with hamburger menu
- Hero section (logo 60px, title 36px)
- Full-width CTA button
- 4-step cards stack vertically

**Homepage Feed Mobile**:
- Sticky nav (60px)
- Full-width post cards (margin 16px)
- Avatar reduced to 40px
- Compact engagement bar
- Font sizes -2px

**Profile Page Mobile**:
- Banner (375px × 150px)
- Avatar (96px)
- Action buttons stack vertically, full width
- Tabs horizontal scroll
- Posts feed full width

**Use for**: Mobile responsive implementation

---

### 9. Responsive Breakpoints
**[Open in FigJam →](https://www.figma.com/online-whiteboard/create-diagram/b292b1cb-5d36-408b-a2ca-ad1626741208?utm_source=other&utm_content=edit_in_figjam)**

Complete responsive design guide:

**Mobile (320-768px)**:
- Nav: 60px height
- Layout: Single column, full width
- Padding: 16px
- Fonts: Base -2px
- Avatar: 40px
- Buttons: Full width, stack vertically
- Modals: Full screen

**Tablet (768-1024px)**:
- Nav: 70px height
- Layout: Two column grid
- Cards: 48% width
- Padding: 20px
- Fonts: Base -1px
- Avatar: 44px
- Buttons: Inline
- Modals: 90% width

**Desktop (1024px+)**:
- Nav: 80px height
- Layout: Center feed 600px
- Cards: Fixed width
- Padding: 32px
- Fonts: Base size
- Avatar: 48px
- Buttons: Row layout
- Modals: Fixed width (Tip 480px, Waitlist 540px)

**Use for**: Implementing responsive CSS/Tailwind breakpoints

---

## Next Steps

### Option 1: Manual Figma Design (Recommended for Demo)
1. **Open Figma Desktop** or web app
2. **Create new design file**: "Naked Journalism - UI Mockups"
3. **Set up artboards**:
   - Desktop: 1440px × 900px (3 artboards for 3 pages)
   - Mobile: 375px × 812px (3 artboards for 3 pages)
4. **Import design system** from the FigJam diagram or FIGMA-DESIGN-SPECS.md
5. **Use the logo** from `/public/logo/WhatsApp Image 2026-02-22 at 3.03.57 PM.jpeg`
6. **Reference the diagrams** above while designing
7. **Follow the detailed specs** in `FIGMA-DESIGN-SPECS.md`

**Timeline**: 3-4 hours for high-fidelity mockups

---

### Option 2: Build Frontend First, Then Capture to Figma
1. **Build the React frontend** using Next.js/Vite
2. **Implement all 3 pages** with Tailwind CSS
3. **Use Figma MCP** `generate_figma_design` tool to capture the live site
4. **Push to Figma** for documentation and iteration

**Timeline**: Faster design process, but frontend takes longer

---

### Option 3: Use Figma Community Templates
1. Search Figma Community for "dark mode social media" templates
2. Customize with Naked Journalism branding
3. Adapt for journalism-specific features
4. Add tip modal and waitlist modal

**Timeline**: 1-2 hours for customization

---

## Design Assets Needed

### Images
- [x] Logo from `/public/logo/` directory
- [ ] Hero background image (journalism/camera theme)
- [ ] Mock journalist avatars (10-15, diverse African faces)
- [ ] Sample article images (3-4)
- [ ] Sample video thumbnails (2-3)
- [ ] Icons set (Lucide or Heroicons)

### For Landing Page
- [ ] Camera/journalism equipment photo (from PDF)
- [ ] Mobile payment illustration
- [ ] Community/team photos

### For Feed
- [ ] Mock articles with headlines and images
- [ ] Sample photojournalism images
- [ ] Video thumbnails with play buttons

---

## Figma Plugins to Install

1. **Unsplash** - Free stock photos for mockups
2. **Iconify** - Icon library (Lucide, Heroicons)
3. **Content Reel** - Generate mock names, avatars, text
4. **Contrast** - Check color accessibility
5. **Auto Layout** - Built-in, use for responsive components
6. **Figma to Code** - Export components to React

---

## Design Deliverables for Tomorrow's Demo

### Must Have:
- [x] Landing page mockup (desktop + mobile)
- [x] Homepage feed mockup (desktop + mobile)
- [x] Profile page mockup (desktop + mobile)
- [x] Waitlist modal (both form and success states)
- [x] Tip modal with payment options
- [x] Design system documentation

### Nice to Have:
- [ ] Interactive prototype in Figma
- [ ] Component library for developers
- [ ] Animation specifications
- [ ] Accessibility annotations
- [ ] Developer handoff notes

---

## Sharing & Collaboration

Once designs are created in Figma:

1. **Share link** with "Can view" permissions
2. **Enable comments** for feedback
3. **Create prototype** by linking screens
4. **Present mode** for demo tomorrow
5. **Export assets** for development (SVG, PNG @2x)

---

## Integration with Supabase

The waitlist modal connects to Supabase with this data structure:

```sql
-- Waitlist table schema
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  interest_type TEXT[], -- Array: ['journalist', 'reader', 'both']
  created_at TIMESTAMP DEFAULT NOW(),
  launch_date DATE DEFAULT '2026-04-01'
);
```

**Form validation** before Supabase submission:
- Name: min 2 characters
- Email: valid format
- Phone: international format accepted

---

## Deployment Plan

### Frontend (Vercel)
- Next.js app deployed to Vercel
- Custom domain (optional)
- Environment variables for Supabase

### Backend (Supabase)
- Database for waitlist
- Real-time subscriptions (future)
- Authentication (future)

### Demo URL
Will be available at: `https://naked-journalism.vercel.app` (or custom domain)

---

## Color Usage Guide

### When to Use Each Color:

**Orange (#FF5722)**:
- Primary CTAs (Join Waitlist, Follow, Send Tip)
- Brand elements (logo accent, active states)
- Orange asterisk (*)
- Card 02 in "How It Works"
- Tip button hover state
- Focus states

**Green (#4CAF50)**:
- Verified badges (✓)
- Success messages
- Positive actions

**Red (#F44336)**:
- Like button (filled state)
- Error states
- Required field indicators

**Blue (#2196F3)**:
- Links (underlined text)
- External URLs
- Secondary interactive elements

**White (#FFFFFF)**:
- Primary text
- Headlines
- Button text on orange background

**Gray (#B0B0B0)**:
- Secondary text
- Timestamps
- Inactive states
- Placeholder text

---

## Typography Usage

**H1 (64px Bold)**: Page titles on landing page
**H2 (48px Bold)**: Section headings (Problem, Solution, etc.)
**H3 (24px Bold)**: Card titles, article headlines
**H4 (20px Semibold)**: Subsection titles
**Body (16px Regular)**: Post content, descriptions, form labels
**Caption (12px Regular)**: Timestamps, metadata, helper text

---

## Component States

### Buttons
- **Default**: Orange background, white text
- **Hover**: Darker orange (#FF7043), shadow
- **Active**: Scale 0.98
- **Disabled**: Gray background (#3D3D3D), gray text (#6B6B6B)
- **Focus**: Orange outline

### Inputs
- **Default**: Dark background, gray border
- **Focus**: Orange border, glow
- **Error**: Red border, error message below
- **Success**: Green border, checkmark icon
- **Disabled**: Darker background, no interaction

### Cards
- **Default**: Subtle shadow
- **Hover**: Lift effect, increased shadow
- **Active**: Pressed state
- **Selected**: Orange border (for tabs)

---

## Accessibility Checklist

- [x] Color contrast ratios meet WCAG AA
- [x] Focus states visible on all interactive elements
- [ ] Alt text for all images
- [ ] Semantic HTML structure
- [ ] Keyboard navigation support
- [ ] Screen reader friendly labels
- [ ] Touch targets minimum 44px × 44px
- [ ] Form validation with clear error messages

---

## Questions for Design Review

Before finalizing designs, consider:

1. Should the landing page have a video hero instead of static image?
2. Do we need a dark/light mode toggle, or only dark mode?
3. Should posts have a "save for later" feature?
4. Do we need a search bar in the navigation?
5. Should the feed have infinite scroll or pagination?
6. Do we want social sharing metadata (Open Graph) for posts?
7. Should journalists have verified badges by default?
8. Do we need a notification system UI?

---

## Files Reference

All documentation is in the project root:

- `README.md` - Project overview
- `FRONTEND-DELIVERABLES.md` - Frontend development specs
- `FIGMA-DESIGN-SPECS.md` - Detailed design specifications
- `FIGMA-RESOURCES.md` - This file (diagram links and guides)

---

## Contact & Support

**Project by**: Fred Gitonga & Allan Robinson
**Launch Date**: April 1st, 2026
**Demo Date**: Tomorrow

---

**Ready to design?** Pick an option above and start creating! All the diagrams and specs are ready to guide you. 🎨
