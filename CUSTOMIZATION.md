# Customization Guide - Trexx IT Pro ISP Website

## 🎨 Quick Customization

### 1. Branding & Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  color: {
    1: "#AC6AFF",  // Primary purple - Change to your brand color
    2: "#FFC876",  // Orange accent
    3: "#FF776F",  // Red accent
    4: "#7ADB78",  // Green accent
    5: "#858DFF",  // Blue accent
    6: "#FF98E2",  // Pink accent
  },
}
```

**Example: Change to Blue Theme**
```javascript
color: {
  1: "#0066FF",  // Primary blue
  2: "#00CCFF",  // Light blue
  // ... adjust other colors
}
```

### 2. Company Information

**File:** `constants/index.js`

**Navigation:**
```javascript
export const navigation = [
  { id: "0", title: "Home", url: "/" },
  { id: "1", title: "About Us", url: "/about" },
  // Add/remove/modify menu items
];
```

**Contact Info:**
```javascript
// In app/contact/page.js
<p className="body-2 text-n-3">
  123 Network Street<br />  // Your address
  Tech City, TC 12345<br />
  United States
</p>
```

### 3. Logo & Images

**Replace Logo:**
1. Add your logo to `app/assets/`
2. Update in `app/assets/index.js`:
```javascript
export const assets = {
  trexxITPro: require("./yourlogo.svg"),  // Change filename
  // ...
}
```

**Update Favicon:**
1. Replace `app/favicon.ico`
2. Update in `app/layout.js` if needed

### 4. Site Metadata

**File:** `app/layout.js`

```javascript
export const metadata = {
  title: "Your Company Name",
  description: "Your company description",
};
```

**For Individual Pages:**
```javascript
// In each page.js file
export const metadata = {
  title: "Page Title | Your Company",
  description: "Page description",
};
```

### 5. Pricing Plans

**File:** `constants/index.js`

```javascript
export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Your description",
    price: "29.99",  // Change price
    features: [
      "Feature 1",  // Modify features
      "Feature 2",
      // Add more features
    ],
  },
  // Add more plans
];
```

### 6. Services

**File:** `constants/index.js`

```javascript
export const ispServices = [
  {
    id: "0",
    title: "Your Service Name",
    description: "Service description",
    icon: "wifi",  // wifi, camera, cloud, server, code, desktop
  },
  // Add more services
];
```

### 7. Products (Shop)

**File:** `constants/index.js`

```javascript
export const shopProducts = [
  {
    id: "0",
    title: "Product Name",
    description: "Product description",
    price: "149.99",
    image: "/path/to/image.jpg",  // Add product image
  },
  // Add more products
];
```

### 8. Social Media Links

**File:** `constants/index.js`

```javascript
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/yourserver",  // Your link
  },
  // Update all social links
];
```

## 🎭 Design Customization

### Typography

**File:** `app/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600&display=swap");

:root {
    --font-sora: "YourFont", sans-serif;
    /* Change fonts */
}
```

### Animations

**Adjust Animation Speed:**

**File:** `app/globals.css`

```css
@keyframes fadeInUp {
    /* Modify animation */
}

/* Change duration */
.animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
    /* Change 0.6s to your preferred speed */
}
```

**Disable Animations:**
```css
/* Add to globals.css */
* {
    animation: none !important;
    transition: none !important;
}
```

### Spacing & Layout

**File:** `tailwind.config.js`

```javascript
spacing: {
  0.25: "0.0625rem",
  7.5: "1.875rem",
  15: "3.75rem",
  // Add custom spacing
  20: "5rem",
}
```

### Border Radius

```javascript
// In tailwind.config.js
borderRadius: {
  'xl': '1rem',
  '2xl': '1.5rem',
  // Adjust roundness
}
```

## 📝 Content Updates

### Hero Section

**File:** `components/Hero.jsx`

```javascript
<h1 className="h1 mb-6">
  Your Headline Here
  <span className="relative inline-block">
    Highlighted Text
  </span>
</h1>
<p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
  Your description here
</p>
```

### About Us Page

**File:** `app/about/page.js`

```javascript
const values = [
  {
    title: "Your Value",
    description: "Description",
    icon: "🎯",  // Change emoji
  },
  // Add more values
];

const milestones = [
  { year: "2024", title: "Event", description: "Details" },
  // Add your timeline
];
```

### Testimonials

**File:** `components/Testimonials/Testimonials.jsx`

```javascript
const testimonials = [
  {
    name: "Customer Name",
    role: "Their Role",
    content: "Their testimonial",
    rating: 5,
  },
  // Add real testimonials
];
```

### Stats Section

**File:** `components/Stats/Stats.jsx`

```javascript
const stats = [
  { value: "50K+", label: "Active Users", icon: "👥" },
  // Update with your stats
];
```

## 🔧 Advanced Customization

### Add New Page

1. **Create page file:**
```bash
# Create new page
touch app/newpage/page.js
```

2. **Add content:**
```javascript
"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const NewPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Section className="pt-[8rem]">
          <div className="container">
            {/* Your content */}
          </div>
        </Section>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default NewPage;
```

3. **Add to navigation:**
```javascript
// In constants/index.js
export const navigation = [
  // ...
  { id: "6", title: "New Page", url: "/newpage" },
];
```

### Create New Component

```javascript
// components/YourComponent/YourComponent.jsx
"use client";
import React from "react";

const YourComponent = () => {
  return (
    <div className="relative p-0.5 rounded-2xl bg-conic-gradient">
      <div className="relative bg-n-8 rounded-[1rem] p-8">
        {/* Your content */}
      </div>
    </div>
  );
};

export default YourComponent;
```

### Add Custom Animation

```css
/* In app/globals.css */
@keyframes yourAnimation {
    0% { /* start state */ }
    100% { /* end state */ }
}

.animate-yourAnimation {
    animation: yourAnimation 1s ease-in-out;
}
```

### Custom Gradient

```javascript
// In tailwind.config.js
backgroundImage: {
  "your-gradient": "linear-gradient(to right, #color1, #color2)",
}

// Use in component
<div className="bg-your-gradient">
```

## 🎯 Common Customizations

### Change Button Style

**File:** `components/Button/Button.jsx`

```javascript
const btnStyle = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
  px || "px-7"
} ${className || ""} ${white ? "text-n-8" : "text-n-1"}`;

// Modify classes to change appearance
```

### Adjust Card Hover Effect

```css
/* In app/globals.css */
.hover-glow:hover {
    box-shadow: 0 0 30px rgba(172, 106, 255, 0.5);
    transform: translateY(-5px);
    /* Adjust values */
}
```

### Change Section Padding

```javascript
// In components/Section.jsx
className={`relative ${
  custionPadding ||
  `py-10 lg:py-16 xl:py-20`  // Adjust padding
}`}
```

### Modify Grid Columns

```javascript
// Change from 3 to 4 columns
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

## 📱 Mobile Customization

### Adjust Mobile Menu

**File:** `components/Header/Header.jsx`

```javascript
// Modify mobile menu appearance
<nav className={`${
  openNavigation ? "flex" : "hidden"
} lg:flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8`}>
```

### Mobile-Specific Styles

```javascript
// Use Tailwind responsive prefixes
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, larger on desktop
</div>
```

## 🎨 Theme Variations

### Light Mode (Optional)

```css
/* Add to globals.css */
@media (prefers-color-scheme: light) {
  body {
    @apply bg-white text-gray-900;
  }
  /* Adjust other elements */
}
```

### Alternative Color Scheme

```javascript
// Create theme variants in tailwind.config.js
colors: {
  theme: {
    blue: { /* blue theme colors */ },
    green: { /* green theme colors */ },
  }
}
```

## 🔍 SEO Customization

### Meta Tags

```javascript
// In each page.js
export const metadata = {
  title: "Page Title",
  description: "Description",
  keywords: "keyword1, keyword2",
  openGraph: {
    title: "OG Title",
    description: "OG Description",
    images: ["/og-image.jpg"],
  },
};
```

### Structured Data

```javascript
// Add to page
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company",
    // ... more structured data
  })}
</script>
```

## 💡 Tips

1. **Test Changes Locally** - Always test before deploying
2. **Use Version Control** - Commit before major changes
3. **Keep Backups** - Save original files
4. **Mobile First** - Test on mobile devices
5. **Performance** - Check Lighthouse scores after changes
6. **Consistency** - Maintain design consistency
7. **Accessibility** - Ensure changes are accessible

## 🆘 Need Help?

- Check component files for examples
- Review Tailwind CSS documentation
- Test in browser DevTools
- Use React DevTools for debugging

## ✅ Customization Checklist

- [ ] Update company name and logo
- [ ] Change brand colors
- [ ] Update contact information
- [ ] Modify pricing plans
- [ ] Add real services
- [ ] Update product listings
- [ ] Change social media links
- [ ] Customize hero text
- [ ] Add real testimonials
- [ ] Update about us content
- [ ] Modify footer content
- [ ] Test all pages
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Update SEO metadata
