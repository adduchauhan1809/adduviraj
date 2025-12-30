# Project Creation Prompt

Use this prompt to recreate a similar Next.js website project:

---

## Create a Modern, SEO-Friendly Next.js Website for a Salesforce Consulting Company

### Project Overview
Build a professional, fully configurable Next.js 14 website with App Router for a Salesforce consulting company. The site should be SEO-optimized, crawlable, and require no database - all configuration should be managed through code in a constants file.

### Technical Requirements

**Framework & Tools:**
- Next.js 14+ with App Router (not Pages Router)
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- React 18+ (compatible with Next.js 14)

**Key Features:**
- Server-side rendering (SSR) for SEO
- Static page generation for blog posts
- Dynamic routes for blog posts (`/blog/[id]`)
- Automatic sitemap generation (`app/sitemap.ts`)
- Robots.txt configuration (`app/robots.ts`)
- Responsive design (mobile-first)
- No database required - all data in constants file

### Project Structure

Create the following structure:

```
app/
├── layout.tsx              # Root layout with SEO metadata
├── page.tsx                # Home page
├── globals.css             # Global styles with Tailwind
├── about/
│   └── page.tsx            # About page with team section
├── services/
│   └── page.tsx            # Services listing page
├── pricing/
│   └── page.tsx            # Pricing plans page
├── blog/
│   ├── page.tsx            # Blog listing with search/filter
│   └── [id]/
│       └── page.tsx         # Dynamic blog post page
├── faq/
│   └── page.tsx            # FAQ page with accordion
├── contact/
│   └── page.tsx            # Contact form page
├── privacy/
│   └── page.tsx            # Privacy policy page
├── terms/
│   └── page.tsx            # Terms of service page
├── sitemap.ts              # Dynamic sitemap generation
└── robots.ts               # Robots.txt configuration

components/
├── Navbar.tsx              # Navigation bar (sticky, responsive)
└── Footer.tsx              # Footer with links and contact info

constants.tsx               # All site configuration and data
types.ts                    # TypeScript type definitions
```

### Configuration System

Create a comprehensive `COMPANY_CONFIG` object in `constants.tsx` that includes:

1. **Company Information:**
   - Company name, short name, tagline, description
   - Logo text (single character)
   - Site URL and metadata

2. **Contact Information:**
   - Email, phone, business hours, location
   - Legal email
   - Form submission URL (FormSubmit integration)

3. **Social Media Links:**
   - LinkedIn, Twitter, YouTube URLs
   - Make all social links configurable

4. **Copyright:**
   - Year and company name

5. **Trust Badges:**
   - Certification text
   - Response time information

All components should import and use `COMPANY_CONFIG` instead of hardcoded values.

### Pages to Create

#### 1. Home Page (`app/page.tsx`)
- Hero section with animated statistics
- Service pillars grid (6 services)
- Advantage/features section
- Call-to-action sections
- Use client-side state for animations
- All links should use Next.js Link component

#### 2. Services Page (`app/services/page.tsx`)
- Page header with description
- Detailed service cards with:
  - Visual representation (gradient backgrounds)
  - Service description
  - Process roadmap
  - Benefits list
  - Pricing and timeline info
- CTA section at bottom
- Proper SEO metadata

#### 3. About Page (`app/about/page.tsx`)
- Company story section
- Mission and vision cards
- Team member grid with:
  - Photos (use Next.js Image component)
  - Names, titles, bios
  - Social links (from COMPANY_CONFIG)
- Certifications section
- Values section
- Footer CTA

#### 4. Pricing Page (`app/pricing/page.tsx`)
- Three pricing tiers (Starter, Professional, Enterprise)
- Feature comparison lists
- Pricing FAQ accordion
- CTA section
- Client component for interactivity

#### 5. Blog Listing (`app/blog/page.tsx`)
- Header with search functionality
- Category filter navigation (sticky)
- Featured post spotlight (when on "All" category)
- Blog post grid with:
  - Images (Next.js Image component with unoptimized prop)
  - Category badges
  - Tags
  - Excerpts
  - Read more links
- Client component for search/filter functionality

#### 6. Blog Post Page (`app/blog/[id]/page.tsx`)
- Dynamic route using `[id]` folder
- Generate static params for all blog posts
- Generate metadata for SEO (title, description, Open Graph)
- Header with post metadata (date, author, read time, category, tags)
- Featured image (large, rounded)
- Sidebar with social share buttons
- Post content (HTML content from constants)
- Author card
- Related posts section
- CTA section
- Use `generateStaticParams` for static generation

#### 7. FAQ Page (`app/faq/page.tsx`)
- Header with search bar
- Category filter buttons
- Accordion FAQ items
- Support contact section with three cards
- Client component for search and accordion functionality

#### 8. Contact Page (`app/contact/page.tsx`)
- Contact form with:
  - Name, email, phone, company fields
  - Service interest dropdown
  - Timeline and budget dropdowns
  - Message textarea
  - FormSubmit integration (form action from COMPANY_CONFIG)
  - Success state after submission
- Contact details panel
- Social media links
- Trust badge
- Client component for form handling

#### 9. Privacy & Terms Pages
- Simple legal content pages
- Use COMPANY_CONFIG for contact email
- Proper SEO metadata

### Content Requirements

#### Blog Posts
Create at least 7 blog posts in `BLOG_POSTS` array, each with:
- Minimum 1000 words of content
- Proper HTML structure (h2, h3, p, ul, li tags)
- Unique image URLs (use Unsplash)
- Category, tags, author, date, read time
- At least one featured post

#### Services
Create 6 services in `SERVICES` array with:
- Icon (Lucide React component)
- Title, short description, full description
- Process steps (array)
- Timeline, pricing, benefits
- Unique gradient colors for visual representation

#### Team Members
Create 4 team members with:
- Name, title, bio
- Photo URL (use Unsplash or similar)
- All should use images that load properly

#### FAQ Items
Create 32+ FAQ items across 4 categories:
- General (8 items)
- Services (8 items)
- Pricing (8 items)
- Support (8 items)

### SEO Requirements

1. **Metadata on All Pages:**
   - Title, description, keywords
   - Open Graph tags
   - Twitter Card tags
   - Proper robots directives

2. **Sitemap (`app/sitemap.ts`):**
   - Generate sitemap with all routes
   - Include blog posts dynamically
   - Set proper priorities and change frequencies

3. **Robots.txt (`app/robots.ts`):**
   - Allow all pages
   - Disallow API routes and admin paths
   - Reference sitemap URL using `COMPANY_CONFIG.site.url`
   - Example: `sitemap: '${COMPANY_CONFIG.site.url}/sitemap.xml'`

4. **Image Optimization:**
   - Use Next.js Image component everywhere
   - Add `unoptimized` prop for external images
   - Configure `next.config.js` with remote patterns for Unsplash
   - Proper alt text on all images

5. **Structured Data Ready:**
   - Semantic HTML structure
   - Proper heading hierarchy
   - Article tags for blog posts

### Styling Requirements

1. **Tailwind Configuration:**
   - Custom colors: salesforce (#0176D3), navy (#032D60), teal-accent (#00A1E0)
   - Custom font: Inter from Google Fonts
   - Rounded corners (use rounded-[2rem], rounded-[3rem], etc.)
   - Custom scrollbar styling

2. **Design System:**
   - Consistent spacing and padding
   - Hover effects and transitions
   - Shadow effects for depth
   - Gradient backgrounds
   - Glassmorphism effects where appropriate

3. **Responsive Design:**
   - Mobile-first approach
   - Breakpoints: sm, md, lg
   - Mobile menu for navigation
   - Responsive grids and layouts

### Component Requirements

#### Navbar Component
- Fixed position, sticky on scroll
- Logo with configurable text
- Navigation links from NAV_ITEMS constant
- Mobile hamburger menu
- Active link highlighting
- CTA button
- Use Next.js Link and usePathname hook

#### Footer Component
- Company description
- Quick links section
- Services links section
- Contact information (from COMPANY_CONFIG)
- Social media links (from COMPANY_CONFIG)
- Copyright (from COMPANY_CONFIG)
- Legal links

### Form Integration

**Contact Form:**
- Use FormSubmit (no backend required)
- Form action from COMPANY_CONFIG
- Hidden fields for subject and redirect
- Success state handling
- Form validation
- All form fields properly named

### Image Handling

1. **Next.js Image Component:**
   - Use everywhere images are displayed
   - Proper width/height props
   - `unoptimized` prop for external images
   - `priority` prop for above-fold images

2. **Image Configuration:**
   - Configure `next.config.js` with remotePatterns
   - Include: images.unsplash.com, i.pravatar.cc, ui-avatars.com

3. **Image URLs:**
   - Use Unsplash for blog post images
   - Use Unsplash for team photos
   - Ensure all image URLs are valid and load properly

### Code Quality Requirements

1. **TypeScript:**
   - Proper type definitions in `types.ts`
   - Type all props and functions
   - Use interfaces for data structures

2. **Code Organization:**
   - Separate constants from components
   - Use absolute imports with `@/` alias
   - Client components marked with `'use client'`
   - Server components by default

3. **Best Practices:**
   - No unused imports
   - Proper error handling
   - Accessible HTML (semantic tags, alt text, ARIA labels)
   - Performance optimizations

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Configuration File Structure

The `constants.tsx` file should export:

1. `COMPANY_CONFIG` - All site configuration
2. `NAV_ITEMS` - Navigation menu items
3. `SERVICES` - Service offerings array
4. `TEAM` - Team members array
5. `BLOG_POSTS` - Blog posts array
6. `FAQS` - FAQ items array
7. `TESTIMONIALS` - Testimonials array (if needed)

### Deployment Considerations

1. **Build Configuration:**
   - Ensure `next.config.js` is properly configured
   - Image domains whitelisted
   - No environment variables required
   - For Netlify: Ensure `useSearchParams()` is wrapped in Suspense boundary
   - Update `COMPANY_CONFIG.site.url` to match your deployment domain
   - For Netlify: Use your Netlify app URL (e.g., `https://your-app.netlify.app`)

2. **Git Configuration:**
   - `.gitignore` should exclude `.next/`, `node_modules/`, etc.
   - No sensitive data in code (all configurable)

3. **Platform Support:**
   - Should work on Vercel, Netlify, or any Node.js hosting
   - No special build requirements

### Testing Checklist

Before completion, ensure:
- [ ] All pages load without errors
- [ ] All images display correctly
- [ ] Contact form submits successfully
- [ ] All links work properly
- [ ] Mobile responsive design works
- [ ] SEO metadata is present on all pages
- [ ] Sitemap generates correctly
- [ ] Robots.txt is accessible
- [ ] Blog posts are statically generated
- [ ] Search and filter work on blog/FAQ pages
- [ ] All COMPANY_CONFIG values are used (no hardcoded values)
- [ ] No console errors
- [ ] No unused imports
- [ ] TypeScript compiles without errors

### Documentation

Create a comprehensive README.md with:
- Installation instructions
- How to run the project
- Configuration guide
- Project structure explanation
- Customization instructions
- Deployment guide
- Troubleshooting section

### Final Notes

- Make the site production-ready
- Ensure all content is professional and well-written
- Blog posts should be substantial (1000+ words each)
- Use modern React patterns (hooks, functional components)
- Follow Next.js 14 best practices
- Ensure accessibility (semantic HTML, proper alt text)
- Optimize for performance (lazy loading, image optimization)
- Make it easy for non-technical users to configure via constants.tsx

---

**Expected Outcome:**
A fully functional, SEO-optimized Next.js website that is:
- Easy to configure without a database
- Professional and modern design
- Fully responsive
- Production-ready
- Well-documented
- Easy to deploy

