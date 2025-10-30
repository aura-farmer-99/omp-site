import { z } from "zod";

export const Contact = z.object({
  name: z.string(),
  title: z.string(),
  phoneDisplay: z.string(),
  whatsappNumber: z.string(),
  email: z.string(),
  instagramHandle: z.string(),
  instagramUrl: z.string().url(),
  location: z.string(),
});

export const Brand = z.object({
  name: z.string(),
  shortName: z.string(),
  tagline: z.string(),
  descriptor: z.string(),
  logo: z.object({
    circle: z.string(),
    mark: z.string(),
    wordmark: z.string(),
    og: z.string(),
  }),
  colors: z.record(z.string(), z.string()),
});

export const SiteSEO = z.object({
  title: z.string(),
  description: z.string().max(160),
  url: z.string().url(),
  ogImage: z.string(),
  areaServed: z.array(z.string()),
});

export const WorkItem = z.object({
  id: z.string(),
  title: z.string(),
  client: z.string().optional(),
  category: z.enum(["reel", "film", "event", "ads", "website"]),
  format: z.enum(["video-16x9", "video-9x16", "image", "site"]).default("video-9x16"),
  video: z
    .object({
      mp4: z.string(),
      webm: z.string().optional(),
      poster: z.string(),
    })
    .optional(),
  image: z.string().optional(),
  durationSec: z.number().optional(),
  featured: z.boolean().default(false),
  instagramUrl: z.string().url().optional(),
});

export const Service = z.object({
  id: z.string(),
  pillar: z.enum(["production", "marketing", "web"]),
  title: z.string(),
  summary: z.string(),
  includes: z.array(z.string()),
});

export const Plan = z.object({
  id: z.string(),
  group: z.enum(["marketing", "website"]),
  kind: z.enum(["plan", "project", "bundle"]),
  name: z.string(),
  priceInr: z.number(),
  billing: z.enum(["monthly", "one-time"]),
  startingFrom: z.boolean().default(false),
  tagline: z.string(),
  bestFor: z.string(),
  features: z.array(z.string()),
  deliveryTime: z.string().optional(),
  recommended: z.boolean().default(false),
  whatsappPrefill: z.string(),
});

export const AddOn = z.object({
