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
