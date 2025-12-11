import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
import { reels, films, websites, youtubeChannel, instagramProfile } from "../../content/work";
import type { WorkItem } from "../../lib/schema";
import { ReelCard } from "../ui/ReelCard";
import { BrowserFrame } from "../ui/BrowserFrame";
import { buildWhatsAppUrl, workPrefill } from "../../lib/whatsapp";
import { track } from "../../lib/analytics";

export function Work() {
  const reduce = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    if (!railRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    railRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="work" className="section-padding bg-bg-raise/30">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ivory tracking-tight mb-4">
            Recent reels, films, campaigns and websites.
          </h2>
