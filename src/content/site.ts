import type { Brand, Contact, SiteSEO } from "../lib/schema";
import { asset } from "../lib/asset";

export const brand: Brand = {
  name: "Polkat Productions & Marketing",
  shortName: "Polkat",
  tagline: "Frames That Speak",
  descriptor: "Event Reels | Cinematic Videos | Highlights",
  logo: {
    circle: asset("/brand/om-avatar-1x1.jpg"),
    mark: asset("/brand/om-avatar-1x1.jpg"),
    wordmark: asset("/brand/om-avatar-1x1.jpg"),
    og: asset("/brand/om-avatar-1x1.jpg"),
  },
  colors: {
    bg: "#121212",
    bgRaise: "#1B1B1B",
    bgCard: "#232323",
    gold: "#C59042",
    goldLight: "#E0C387",
    goldDark: "#8A5F22",
    ivory: "#FDFEF9",
    muted: "#B2AEA5",
  },
};

export const contact: Contact = {
  name: "Om Polkat Patil",
  title: "Creative Director & Digital Strategist",
  phoneDisplay: "+91 90229 23544",
  whatsappNumber: "919022923544",
  email: "ompolkatpatil@gmail.com",
  instagramHandle: "om.polkat.patil",
  instagramUrl: "https://www.instagram.com/om.polkat.patil/",
  location: "Maharashtra, India",
};

export const seo: SiteSEO = {
  title: "Polkat Productions & Marketing | Video Production, Social Media, Ads & Web",
  description:
    "Polkat Productions & Marketing helps brands get noticed with video, social media, ads and websites. Based in Maharashtra, India.",
  url:
    import.meta.env.VITE_SITE_URL ||
    "https://aura-farmer-99.github.io/omp-site/",
  ogImage: asset("/brand/om-avatar-1x1.jpg"),
  areaServed: ["Maharashtra", "India"],
};
