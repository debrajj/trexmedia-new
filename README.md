# Trexx IT Pro - Futuristic ISP Website

A modern, dark-mode ISP website built with Next.js featuring glowing effects, smooth animations, and a premium futuristic design.

## 🚀 Features

- **Futuristic Dark Mode Design** - Premium dark theme with glowing effects and gradient accents
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Smooth Animations** - Subtle fade-in, float, and glow animations throughout
- **Complete Page Structure**:
  - Home - Hero, Stats, Benefits, Services, Pricing, Roadmap
  - About Us - Company story, values, and timeline
  - Services - Complete service offerings with detailed cards
  - Pricing - Three-tier pricing plans (Basic, Pro, Enterprise)
  - Shop - Product showcase with hover effects
  - Contact - Interactive form with contact information
- **Sticky Navigation** - Smooth scrolling with animated hover effects
- **Footer** - Social links and back-to-top button
- **ISP-Themed Content** - All content customized for internet service provider business

## 🎨 Design Elements

- **Color Scheme**: Dark backgrounds (n-8, n-7) with vibrant accent colors
- **Glowing Effects**: Conic gradients and animated glows on cards and CTAs
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent padding and margins for balanced layout
- **Animations**: 
  - Fade-in-up for content reveals
  - Float animations for icons
  - Glow pulse effects on featured elements
  - Smooth hover transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom utilities
- **Fonts**: Sora, Source Code Pro, Space Grotesk
- **Icons**: SVG icons and emoji for visual elements

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── services/       # Services page
│   ├── shop/          # Shop page
│   ├── contact/       # Contact page
│   ├── pricing/       # Pricing page (existing)
│   ├── assets/        # Images and SVGs
│   └── page.js        # Home page
├── components/
│   ├── Header/        # Navigation header
│   ├── Footer/        # Footer with social links
│   ├── Hero/          # Hero section
│   ├── Stats/         # Statistics showcase
│   ├── Benefits/      # Benefits cards
│   ├── ServicesShowcase/ # Services preview
│   ├── Pricing/       # Pricing tables
│   ├── CTA/          # Call-to-action section
│   └── ...           # Other components
└── constants/
    └── index.js       # Site content and configuration
```

## 🎯 Key Pages

### Home Page
- Hero section with animated background
- Live statistics (Users, Uptime, Speed, Support)
- Benefits showcase with 6 feature cards
- Services preview with 6 service offerings
- Pricing comparison table
- Technology roadmap
- Call-to-action section

### About Us
- Company story and mission
- Core values (Connectivity, Innovation, Reliability)
- Visual timeline of company milestones

### Services
- Detailed service cards with icons
- Wi-Fi Internet Solutions
- IP Camera Setup
- IP Cloud Camera Integration
- Co-location Hosting
- Website Development Servers
- PC Repairs & Setup

### Shop
- Product grid with hover effects
- Premium networking equipment
- Price display and buy buttons
- Shipping and warranty information

### Contact
- Interactive contact form
- Business address and contact details
- Map placeholder
- Social media links

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- `color-1` through `color-6`: Accent colors
- `n-1` through `n-13`: Neutral/dark theme colors

### Content
Update `constants/index.js` to modify:
- Navigation links
- Service offerings
- Pricing plans
- Product listings
- Social media links

### Animations
Customize animations in `app/globals.css`:
- `fadeInUp`, `fadeIn`, `glow`, `float` keyframes
- Transition timings and easing functions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-optimized interactions

## ⚡ Performance

- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- CSS-based animations for smooth 60fps
- Lazy loading for off-screen content

## 🔧 Configuration

The site uses Next.js App Router with:
- Server and Client Components
- Automatic code splitting
- Built-in optimization
- SEO-friendly metadata

## 📄 License

This project is open source and available under the MIT License.
