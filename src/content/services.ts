import type { Service } from "../lib/schema";

export const services: Service[] = [
  {
    id: "production",
    pillar: "production",
    title: "Production",
    summary:
      "Reel shoots, brand films and event coverage, shot and edited in-house.",
    includes: [
      "Reel shoots (Event, Cinematic, Business, Personal)",
      "Brand films and cinematic videos",
      "Event coverage and highlights",
      "Video editing and colour grade",
    ],
  },
  {
    id: "marketing",
    pillar: "marketing",
    title: "Marketing & Promotions",
    summary:
      "Social media management and paid ads that bring enquiries, not just views.",
    includes: [
      "Social page management",
      "Meta & Google Ads",
      "Campaign content and creatives",
      "Monthly reporting and strategy",
    ],
  },
  {
    id: "web",
    pillar: "web",
    title: "Websites",
    summary:
      "Landing pages and business sites that turn visitors into enquiries.",
    includes: [
      "Landing pages for campaigns",
      "Business websites",
      "WhatsApp and call integration",
      "SEO and analytics setup",
    ],
  },
];
// POLKAT-163: follow up on accordion open state
