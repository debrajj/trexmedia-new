import { assets } from "@/app/assets";

const {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  fibreAi1,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} = assets;

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: "4",
    title: "Shop",
    url: "/shop",
  },
  {
    id: "5",
    title: "Contact",
    url: "/contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [];

export const trexxITProServices = [
  "High-Speed Internet",
  "24/7 Support",
  "Seamless Integration",
];

export const ispServices = [
  {
    id: "0",
    title: "Wi-Fi Internet Solutions",
    description: "Ultra-fast fiber optic internet with speeds up to 1Gbps. Perfect for homes and businesses.",
    icon: "wifi",
    buttonText: "Show Plans",
    buttonLink: "/pricing",
  },
  {
    id: "1",
    title: "CCTV Camera Setup",
    description: "Professional installation and configuration of CCTV surveillance systems for complete security.",
    icon: "camera",
    buttonText: "Get Quote",
    buttonLink: "https://wa.me/1234567890?text=Hi,%20I%20need%20a%20quote%20for%20CCTV%20Camera%20Setup",
    isExternal: true,
  },
  {
    id: "2",
    title: "Co-location Hosting",
    description: "Secure data center facilities with 99.9% uptime guarantee and redundant power.",
    icon: "server",
    comingSoon: true,
  },
  {
    id: "3",
    title: "IP Cloud Camera Integration",
    description: "Cloud-based camera systems with remote access and AI-powered monitoring.",
    icon: "cloud",
    comingSoon: true,
  },
  {
    id: "4",
    title: "Web Services",
    description: "High-performance dedicated servers optimized for web hosting and development.",
    icon: "code",
    buttonText: "Let's Discuss",
    buttonLink: "https://wa.me/1234567890?text=Hi,%20I%20want%20to%20discuss%20Web%20Services",
    isExternal: true,
  },
  {
    id: "5",
    title: "Gaming PC Setup",
    description: "Custom gaming PC builds, optimization, and high-performance setup services.",
    icon: "desktop",
    comingSoon: true,
  },
];

export const trexxITProServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Fiber Optic Expansion",
    text: "Expanding our fiber optic network to reach more neighborhoods and businesses, delivering gigabit speeds to your doorstep.",
    date: "Q1 2025",
    status: "progress",
    imageUrl: fibreAi1,
    colorful: true,
  },
  {
    id: "1",
    title: "Enhanced Security Suite",
    text: "Launching advanced cybersecurity features including DDoS protection, firewall management, and real-time threat monitoring for all customers.",
    date: "Q2 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Cloud Storage Integration",
    text: "Introducing free cloud storage and backup solutions for all internet plans, keeping your data safe and accessible anywhere.",
    date: "Q3 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Gaming PC Setup",
    text: "Professional gaming PC builds and optimization services with high-performance hardware selection, custom cooling solutions, and network optimization for competitive gaming.",
    date: "Q4 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With AI-powered network management and enterprise-grade security, it's the perfect solution for businesses looking to scale efficiently.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Network Management",
  },
  {
    id: "2",
    title: "Enterprise Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Perfect for home users and small offices",
    price: "29.99",
    features: [
      "50 Mbps download speed",
      "Unlimited data usage",
      "24/7 customer support",
      "Free router installation",
      "Basic security features",
    ],
  },
  {
    id: "1",
    title: "Pro",
    description: "Ideal for businesses and power users",
    price: "79.99",
    features: [
      "500 Mbps download speed",
      "Unlimited data usage",
      "Priority customer support",
      "Advanced security suite",
      "Static IP address included",
      "Free equipment upgrade",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom solutions for large organizations",
    price: null,
    features: [
      "Up to 1 Gbps dedicated bandwidth",
      "Unlimited data with SLA guarantee",
      "Dedicated account manager",
      "Enterprise-grade security",
      "Multiple static IPs",
      "Co-location hosting options",
      "Custom network solutions",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "LIGHTNING FAST",
    text: "Experience 10G fiber speeds with MPLS-powered redundancy for unmatched reliability and performance.",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "24/7 Support",
    text: "Our expert technical team is available round the clock to assist you with any issues.",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "RELIABLE CONNECTION",
    text: "Reliable connectivity with 98.33% uptime, 2-day power backup, and a ring-topology network for seamless redundancy — keeping you connected, always.",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "SECURE NETWORK",
    text: "CGNAT + Firewall + MPLS — layered security for safe, private internet access.",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Scalable Solutions",
    text: "Flexible plans that grow with your needs, from home to enterprise level.",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Smart Technology",
    text: "AI-powered network optimization for the best performance at all times.",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const shopProducts = [
  {
    id: "0",
    title: "ASUS AX6000 Wi-Fi Router",
    description: "Dual-band AX6000 router with WiFi 6, advanced QoS, and gaming acceleration",
    price: "24,999",
    originalPrice: "33,199",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=400&fit=crop&crop=center",
    category: "Routers",
    inStock: true,
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: "1",
    title: "Hikvision 4K Security Camera",
    description: "4K Ultra HD IP camera with night vision, AI detection, and weatherproof design",
    price: "15,799",
    originalPrice: "20,749",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    category: "Security",
    inStock: true,
    rating: 4.6,
    reviews: 892,
  },
  {
    id: "2",
    title: "Netgear 24-Port Switch",
    description: "24-port Gigabit managed switch with PoE+ and advanced VLAN support",
    price: "37,349",
    originalPrice: "45,649",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop&crop=center",
    category: "Switches",
    inStock: true,
    rating: 4.7,
    reviews: 634,
  },
  {
    id: "3",
    title: "Eero Pro 6E Mesh System",
    description: "Whole-home WiFi 6E mesh system covering up to 6000 sq ft with gigabit speeds",
    price: "45,649",
    originalPrice: "58,099",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    category: "Mesh Systems",
    inStock: false,
    rating: 4.9,
    reviews: 2156,
  },
  {
    id: "4",
    title: "Ubiquiti Access Point",
    description: "Enterprise-grade WiFi 6 access point with advanced management and analytics",
    price: "14,939",
    originalPrice: "18,259",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=400&fit=crop&crop=center",
    category: "Access Points",
    inStock: true,
    rating: 4.5,
    reviews: 445,
  },
  {
    id: "5",
    title: "Fiber Optic Cable Kit",
    description: "Professional fiber optic installation kit with connectors and testing tools",
    price: "7,469",
    originalPrice: "10,789",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    category: "Cables",
    inStock: true,
    rating: 4.4,
    reviews: 278,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
