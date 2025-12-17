import type { Plan, AddOn } from "../lib/schema";

export const marketingPlans: Plan[] = [
  {
    id: "spark",
    group: "marketing",
    kind: "plan",
    name: "Spark",
    priceInr: 9999,
    billing: "monthly",
    startingFrom: true,
    tagline: "Getting started on Instagram",
    bestFor: "Getting started on Instagram",
    features: [
      "4 reels/videos per month",
      "Edit client footage (or add a half-day shoot)",
      "Captions + hashtags",
      "1 revision per video",
    ],
    recommended: false,
    whatsappPrefill:
      "Hi Om, I'm interested in the Spark marketing plan (₹9,999/mo). My business is ___.",
  },
  {
    id: "growth",
    group: "marketing",
    kind: "plan",
    name: "Growth",
    priceInr: 19999,
    billing: "monthly",
    startingFrom: true,
    tagline: "Steady enquiries from Instagram",
    bestFor: "Local brands that want steady enquiries",
    features: [
      "8 videos per month",
      "1 shoot day",
      "12 posts/stories + scheduling",
      "Meta Ads setup + monthly optimisation",
      "Monthly insights summary",
      "2 revisions per video",
    ],
    recommended: true,
    whatsappPrefill:
      "Hi Om, I'm interested in the Growth marketing plan (₹19,999/mo). My business is ___.",
  },
  {
    id: "authority",
    group: "marketing",
    kind: "plan",
    name: "Authority",
    priceInr: 34999,
    billing: "monthly",
    startingFrom: true,
    tagline: "Lead your city",
    bestFor: "Brands that want to lead their city",
    features: [
      "12 videos per month",
      "2 shoot days",
      "Full management + community replies",
      "Meta + Google Ads management",
      "Monthly report + strategy call",
      "2 revisions + priority turnaround",
    ],
    recommended: false,
    whatsappPrefill:
      "Hi Om, I'm interested in the Authority marketing plan (₹34,999/mo). My business is ___.",
  },
];

export const websitePlans: Plan[] = [
  {
    id: "essential",
    group: "website",
    kind: "plan",
    name: "Essential",
    priceInr: 4999,
    billing: "one-time",
    startingFrom: true,
    tagline: "A clean one-page presence",
    bestFor: "A clean one-page presence",
